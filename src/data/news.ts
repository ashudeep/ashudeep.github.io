export interface NewsItem {
  date: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    date: '2024-05-17',
    content:
      'Paper on measuring user impact of diversification in recommendations titled "Inclusive Recommendations and User Engagement: Experimental Evidence from Pinterest" accepted at <a href="https://ec24.sigecom.org/program/accepted-papers/" target="_blank" rel="noopener">ACM EC 2024</a>.',
  },
  {
    date: '2023-10-17',
    content:
      'Presented a guest lecture for the Operations Management class (BUAD 311) at USC Marshall School of Business on "Responsible ML for Real-World Search and Recommender Systems: A Multistakeholder Perspective" <a href="/assets/pdf/usc-talk.pdf">(slides)</a>.',
  },
  {
    date: '2023-09-09',
    content:
      'Ongoing research with <a href="https://madhavkumar.com/" target="_blank" rel="noopener">Madhav Kumar</a> (MIT) on the impact of diversification in recommender systems on its users was recently accepted to <a href="https://sites.google.com/view/stagewise2023/home" target="_blank" rel="noopener">Workshop on Information Systems and Economics (WISE) 2023</a>.',
  },
  {
    date: '2023-06-15',
    content:
      'Our work on interpretability for recommender systems called "RecRec: Algorithmic Recourse for Recommender Systems" was accepted to <a href="https://uobevents.eventsair.com/cikm2023/" target="_blank" rel="noopener">ACM CIKM 2023</a>. This is joint work with co-authors from University of Washington and University of Maryland. Here is the <a href="https://arxiv.org/abs/2308.14916" target="_blank" rel="noopener">arXiv link</a> for the paper.',
  },
  {
    date: '2023-06-11',
    content:
      'Our recent work on <a href="https://dl.acm.org/doi/10.1145/3593013.3594112" target="_blank" rel="noopener">diversification in search and recommender systems</a> across the Pinterest platform was accepted to <a href="https://facctconference.org/2023/" target="_blank" rel="noopener">ACM FAccT 2023</a>. See you in Chicago! It was recently also published on the <a href="https://medium.com/pinterest-engineering/representation-online-matters-practical-end-to-end-diversification-in-search-and-recommender-cb60b547f2e0" target="_blank" rel="noopener">Pinterest Engineering blog</a>.',
  },
  {
    date: '2022-12-05',
    content:
      'The slides to the NeurIPS 2022 tutorial on Fair and Socially Responsible ML for Recommendations are public. Download them <a href="https://fair-recs-tutorial.github.io/neurips-2022-tutorial/" target="_blank" rel="noopener">here</a>. Visit the <a href="https://neurips.cc/virtual/2022/tutorial/55805" target="_blank" rel="noopener">NeurIPS portal</a> to access the recording video if you are registered.',
  },
  {
    date: '2022-09-28',
    content:
      '<a href="https://www.linkedin.com/in/hannah-korevaar-5163b463/" target="_blank" rel="noopener">Hannah Korevaar</a> (Meta), <a href="https://mraghavan.github.io/" target="_blank" rel="noopener">Manish Raghavan</a> (MIT), and I are presenting a tutorial at NeurIPS 2022 on Fair and Socially Responsible ML for Recommendations.',
  },
  {
    date: '2021-09-29',
    content:
      'Our paper <a href="https://arxiv.org/abs/2107.06720" target="_blank" rel="noopener">"Fairness in Ranking under Uncertainty"</a> has been accepted to NeurIPS 2021. This is joint work with my advisor Thorsten Joachims (Cornell) and David Kempe from USC.',
  },
];
