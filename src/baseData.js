// type is for color grouping = Info, hardware...

const generateDate = (news) => {
  const startDate = new Date(news[0].eventDate);
  const initialEstimate = new Date(news[0].expectedDelivery);
  const finalEstimate = new Date(news[news.length - 1].expectedDelivery);
  const overEstimate = Math.round((finalEstimate - startDate) / (initialEstimate - startDate) * 100) - 100;
  const overRunMonth = Math.round((finalEstimate - initialEstimate)/1000/60/60/24/30);
  const initialMonth = Math.round((initialEstimate - startDate)/1000/60/60/24/30);
  return {startDate, initialEstimate, finalEstimate, overEstimate, overRunMonth, initialMonth };
}

export const BFR = () => {
  const news = [
    {
      id: 'RAPT',
      dependency: null,
      miniDesc: 'Raptor engine',
      eventDate: '2012-03-02',
      expectedDelivery: '2020-01-02',
      url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
      descriptions: 'Initial work on Raptor announced with far away expected date of delivery.',
      type: 'hardware',
    },
    {
      id: 'START',
      dependency: null,
      miniDesc: 'Announcement plan',
      eventDate: '2014-03-01',
      expectedDelivery: '2020-01-02',
      url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
      descriptions: 'Initial official announcement of a future Full redesign with full reusability.',
      type: 'Info',
    },
    {
      id: 'ITS',
      dependency: null,
      miniDesc: 'ITS (12m)',
      eventDate: '2016-09-01',
      expectedDelivery: '2020-06-02',
      url: 'https://en.wikipedia.org/wiki/ITS_launch_vehicle',
      descriptions: 'Space conference and public initial details & timeline for ITS.',
      type: 'Info',
    },
    {
      id: 'BFR',
      dependency: null,
      miniDesc: 'BFR (9m)',
      eventDate: '2017-07-01',
      expectedDelivery: '2019-09-02',
      url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
      descriptions: 'Complete redesign and scale back public show in Space conference',
      type: 'Info',
    },
    {
      id: 'BFRSteel',
      dependency: 'BFR',
      miniDesc: 'BFR Steel switch',
      eventDate: '2018-12-01',
      expectedDelivery: '2019-04-02',
      url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
      descriptions: 'Switch to Metal and expected date of first Hop, This never flow in that time, it got delay for later in 2019',
      type: 'delayed',
    },
    {
      id: 'MK1',
      dependency: 'BFRSteel',
      miniDesc: 'BFR Steel Proto',
      eventDate: '2019-06-01',
      expectedDelivery: '2020-012-02',
      url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
      descriptions: 'First Hop & Display of MK1 at conference with expectation of 6month Hop & late 2020 for orbital',
      type: 'hardware',
    }
  ];
  
  return {
    id: 'BFR',
    name: 'BFR',
    descriptions: 'SpaceX BFR Rocket Dev cycle',
    cie: 'SpaceX',
    ...generateDate(news),
    news,
  };
}

export const FH = () => {
  const news = [
    {
      id: 'First',
      dependency: null,
      miniDesc: 'Unveiling of FH',
      eventDate: '2011-04-02',
      expectedDelivery: '2013-06-01',
      url: '',
      descriptions: '',
      type: 'Info',
    },
    {
      id: 'Central_Core',
      dependency: null,
      miniDesc: 'Central core Fire',
      eventDate: '2017-04-02',
      expectedDelivery: '2017-05-02',
      url: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
      descriptions: 'Central core test',
      type: 'Info',
    },
    {
      id: 'Launch',
      dependency: 'Central_Core',
      miniDesc: '1st Launch',
      eventDate: '2018-01-06',
      expectedDelivery: '2018-02-06',
      url: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
      descriptions: 'First launch',
      type: 'Info',
    }
  ];
  return {
    id: 'FR',
    name: 'Falcon heavy',
    descriptions: 'SpaceX Falcon heavy Rocket Dev cycle',
    cie: 'SpaceX',
    ...generateDate(news),
    news,
  }
};

export const SLS = () => {
  const news = [
    {
      id: 'CP',
      dependency: null,
      miniDesc: 'Constellation Program unveil',
      eventDate: '2004-01-14',
      expectedDelivery: '2010-01-02',
      url: 'https://www.gao.gov/new.items/d09844.pdf',
      descriptions: 'To replace the Shuttle, expected orbit in 2010 & crew 2013 internally.',
      type: 'Info',
    },
    {
      id: 'SLS',
      dependency: 'CP',
      miniDesc: 'Cancel CP for SLS',
      eventDate: '2011-09-02',
      expectedDelivery: '2017-05-02',
      url: 'https://en.wikipedia.org/wiki/Space_Launch_System',
      descriptions: 'Initial SLS proposition',
      type: 'Delayed',
    },
    {
      id: 'delay',
      dependency: 'SLS',
      miniDesc: 'Block 2 Advance Boosters',
      eventDate: '2019-06-02',
      expectedDelivery: '2021-09-02',
      url: 'https://www.theverge.com/2019/6/19/18691230/nasa-space-launch-system-orion-artemis-moon-human-exploration',
      descriptions: 'More Delay',
      type: 'Info',
    }
  ];
  return {
    id: 'SLS',
    name: 'SLS',
    descriptions: 'Space/Single Launch System',
    cie: 'NASA',
    ...generateDate(news),
    news,
  }
  
};


export const JWT = () => {
  const news = [
    {
      id: 'JWT',
      dependency: null,
      miniDesc: 'Constellation Program unveil',
      eventDate: '1997-01-02',
      expectedDelivery: '2007-01-02',
      url: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
      descriptions: '',
      type: 'Info',
    },
    {
      id: 'Design',
      dependency: 'JWT',
      miniDesc: 'Preliminary Design Review',
      eventDate: '2008-01-02',
      expectedDelivery: '2014-01-02',
      url: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
      descriptions: 'Update of the Design',
      type: 'Design',
    },
    {
      id: 'Review',
      dependency: 'Design',
      miniDesc: 'Critical Design Review',
      eventDate: '2018-04-27',
      expectedDelivery: '2021-01-02',
      url: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
      descriptions: 'Critical Design Review',
      type: 'Design',
    }
  ];
  return {
    id: 'JWT',
    name: 'JWT',
    descriptions: 'James Webb Space Telescope',
    cie: 'NASA',
    ...generateDate(news),
    news,
  }
};