# Ashudeep Singh - Personal Academic Website

A Jekyll-based academic personal website built with the [al-folio](https://github.com/alshedivat/al-folio) theme. This site showcases research, publications, professional experience, and academic achievements.

## 🌐 Live Site
**[www.ashudeepsingh.com](http://www.ashudeepsingh.com)**

## 🛠 Technology Stack

- **Framework**: Jekyll 3.7.3 (Static Site Generator)
- **Theme**: [al-folio](https://github.com/alshedivat/al-folio) - Academic portfolio theme
- **Hosting**: GitHub Pages with custom domain
- **Bibliography**: Jekyll Scholar for automatic publication management
- **Styling**: Bootstrap 4.5.2 + Custom SCSS
- **Features**: Dark mode, responsive design, Google Analytics integration

## 📁 Repository Structure

```
├── _config.yml           # Site configuration and settings
├── _pages/               # Main content pages
│   ├── about.md         # Homepage/About page
│   ├── publications.md  # Publications listing
│   ├── cv.md           # Curriculum Vitae page
│   └── resume.md       # Resume page
├── _bibliography/       # Academic publications
│   └── papers.bib      # BibTeX bibliography file
├── _news/              # News and announcements
├── _layouts/           # HTML templates
├── _includes/          # Reusable HTML components
├── _sass/              # Custom styling
├── assets/             # Static assets
│   ├── css/           # Stylesheets
│   ├── img/           # Images (profile pic, etc.)
│   ├── js/            # JavaScript files
│   └── pdf/           # CV, resume, and paper PDFs
└── bin/               # Deployment scripts
```

## 🚀 Development Setup

### Prerequisites
- Ruby 2.7.2 (recommended via rbenv or rvm)
- Bundler gem
- Git

### Local Development

1. **First-time setup**:
   ```bash
   bundle install
   ```

2. **After long breaks**:
   ```bash
   bundle update
   ```

3. **Troubleshooting Ruby dependencies**:
   ```bash
   # Install Ruby 2.7.2 using rbenv (recommended)
   rbenv install 2.7.2
   rbenv local 2.7.2
   # OR using rvm
   rvm install 2.7.2
   rvm use 2.7.2
   
   # Then retry
   bundle install
   ```

4. **Start development server**:
   ```bash
   bundle exec jekyll serve
   ```
   Site will be available at `http://localhost:4444`

### Common Development Tasks

#### Adding Publications
1. Add new entries to `_bibliography/papers.bib` in BibTeX format
2. Include PDF files in `assets/pdf/` and reference them in the BibTeX entry
3. Use `selected={true}` to feature papers on the homepage

#### Updating Content
- **About/Homepage**: Edit `_pages/about.md`
- **CV/Resume**: Update PDFs in `assets/pdf/` and links in pages
- **News**: Add new announcements in `_news/` folder
- **Profile Image**: Replace `assets/img/prof_pic.jpg`

#### Configuration
- Site metadata: `_config.yml`
- Social links: Update usernames in `_config.yml`
- Analytics: Google Analytics ID in `_config.yml`

## 📤 Deployment

### Automatic Deployment (Recommended)
The site auto-deploys to GitHub Pages when changes are pushed to the `master` branch.

### Manual Deployment
```bash
# Ensure all changes are committed and pushed to master
git add .
git commit -m "Update content"
git push origin master

# Deploy to gh-pages branch
./bin/deploy
```

**Important**: 
- Always commit and push your `master` branch before deploying
- The `gh-pages` branch is auto-generated and shouldn't be edited manually
- Publishing to `gh-pages` doesn't automatically push commits to `master`

## 🎨 Key Features

### Academic Focus
- **Publications Management**: Automatic bibliography generation from BibTeX
- **CV Integration**: Seamless PDF linking and display
- **Research Highlights**: Featured papers and research areas
- **Professional Timeline**: News and announcements section

### Technical Features
- **Responsive Design**: Mobile-friendly layout
- **Dark Mode**: Automatic theme switching
- **Search Engine Optimization**: Proper meta tags and structure
- **Fast Loading**: Optimized static site generation
- **Analytics Integration**: Google Analytics tracking

### Customizations Made
- Custom domain setup (www.ashudeepsingh.com)
- Professional color scheme and typography
- Research-focused content organization
- Social media integration (Twitter, LinkedIn, Google Scholar)
- PDF hosting for academic documents

## 🔧 Maintenance

### Regular Updates
- **Dependencies**: Run `bundle update` periodically
- **Content**: Keep publications and CV current
- **Analytics**: Monitor site performance via Google Analytics

### Backup Strategy
- Repository is backed up on GitHub
- PDF assets are version-controlled
- Configuration is documented in `_config.yml`

## 📚 Resources

- **Theme Documentation**: [al-folio GitHub](https://github.com/alshedivat/al-folio)
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com/)
- **Jekyll Scholar**: [Bibliography management](https://github.com/inukshuk/jekyll-scholar)
- **Deployment Guide**: [GitHub Pages](https://pages.github.com/)

## 📄 License

This website is based on the al-folio theme, which is licensed under the MIT License. See `LICENSE` for details.

---

*Last updated: July 2025* 
