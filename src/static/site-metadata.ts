interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Zhihao 锻炼记录',
  siteUrl: 'http://blog.gitloc.com:2089',
  logo: 'https://s2.ax1x.com/2019/12/09/Q0mKJK.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '📝 Blog',
      url: 'http://blog.gitloc.com:2089',
    },
    {
      name: '⭐ Repo',
      url: 'https://github.com/arthurfsy2/workouts_page_fsy',
    },
  ],
};

export default data;
