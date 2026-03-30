/**
 * BibTeX parser for publication data.
 * Parses the .bib file and returns structured publication objects.
 */

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string[];
  year: number;
  booktitle?: string;
  journal?: string;
  abbr?: string;
  tag?: string;
  abstract?: string;
  arXiv?: string;
  pdf?: string;
  code?: string;
  website?: string;
  slides?: string;
  selected: boolean;
  bestPaper: boolean;
  note?: string;
  volume?: string;
  pages?: string;
  doi?: string;
}

interface CoauthorData {
  [lastName: string]: { url: string };
}

/** Clean LaTeX artifacts from a string */
function cleanLatex(str: string): string {
  return str
    .replace(/\{\\'\{([a-zA-Z])\}\}/g, '$1\u0301') // {\'{ e}} -> é
    .replace(/\{\\'\s*([a-zA-Z])\}/g, '$1\u0301')   // {\'e} -> é
    .replace(/\\'\{([a-zA-Z])\}/g, '$1\u0301')       // \'{e} -> é
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\\\\/g, '')
    .replace(/\\&/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Parse authors string into array of individual author names */
function parseAuthors(authorsStr: string): string[] {
  return authorsStr.split(/\s+and\s+/).map((a) => {
    const cleaned = cleanLatex(a.trim());
    // Handle "Last, First" format
    if (cleaned.includes(',')) {
      const [last, first] = cleaned.split(',').map((s) => s.trim());
      return `${first} ${last}`;
    }
    return cleaned;
  });
}

/** Parse a single BibTeX entry */
function parseEntry(entryStr: string): Publication | null {
  // Match entry type and key
  const headerMatch = entryStr.match(/@(\w+)\{([^,]+),/);
  if (!headerMatch) return null;

  const type = headerMatch[1].toLowerCase();
  const key = headerMatch[2].trim();

  // Extract all fields
  const fields: Record<string, string> = {};
  // Match field = value patterns, handling braces and quotes
  const fieldRegex = /(\w+)\s*=\s*(?:\{((?:[^{}]|\{[^{}]*\})*)\}|"([^"]*)"|([\w]+))/g;
  let match;
  while ((match = fieldRegex.exec(entryStr)) !== null) {
    const fieldName = match[1].toLowerCase();
    const value = (match[2] ?? match[3] ?? match[4] ?? '').trim();
    fields[fieldName] = value;
  }

  if (!fields.title || !fields.author) return null;

  return {
    key,
    type,
    title: cleanLatex(fields.title),
    authors: parseAuthors(fields.author),
    year: parseInt(fields.year || '0'),
    booktitle: fields.booktitle ? cleanLatex(fields.booktitle) : undefined,
    journal: fields.journal ? cleanLatex(fields.journal) : undefined,
    abbr: fields.abbr,
    tag: fields.tag,
    abstract: fields.abstract ? cleanLatex(fields.abstract) : undefined,
    arXiv: fields.arxiv || fields.arXiv,
    pdf: fields.pdf,
    code: fields.code,
    website: fields.website,
    slides: fields.slides,
    selected: fields.selected === 'true',
    bestPaper: fields.best_paper === 'true',
    note: fields.note,
    volume: fields.volume,
    pages: fields.pages,
    doi: fields.doi,
  };
}

/** Parse a full .bib file string into publications */
export function parseBibFile(bibContent: string): Publication[] {
  const entries: Publication[] = [];

  // Split on @ that starts an entry
  const entryStrings = bibContent.split(/(?=@\w+\{)/);

  for (const entryStr of entryStrings) {
    if (!entryStr.trim()) continue;
    const entry = parseEntry(entryStr);
    if (entry) entries.push(entry);
  }

  // Sort by year descending, then by key
  entries.sort((a, b) => b.year - a.year || a.key.localeCompare(b.key));
  return entries;
}

/** Load and parse the publications data */
export function getPublications(bibContent: string): Publication[] {
  return parseBibFile(bibContent);
}

/** Format author name, bolding "Ashudeep Singh" and linking coauthors */
export function formatAuthor(
  name: string,
  coauthors: CoauthorData,
  isSelf = false
): { name: string; url?: string; isSelf: boolean } {
  const lastName = name.split(' ').pop() || '';
  const coauthor = coauthors[lastName];
  return {
    name: name.replace('*', '').trim(),
    url: coauthor?.url,
    isSelf: isSelf || name.includes('Singh, Ashudeep') || name.includes('Ashudeep Singh'),
  };
}
