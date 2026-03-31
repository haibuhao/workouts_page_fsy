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
  siteUrl: 'http://www.gitloc.com',
  logo: 'https://s2.ax1x.com/2019/12/09/Q0mKJK.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '📝 Blog',
      url: 'http://www.gitloc.com',
    },
    {
      name: '⭐ Repo',
      url: 'https://github.com/haibuhao/workouts_page_fsy',
    },
  ],
};

export default data;
