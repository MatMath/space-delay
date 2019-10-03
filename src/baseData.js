// type of graph (for color grouping) : Info, hardware
export const BFR = {
  id: 'BFR',
  name: 'BFR',
  descriptions: 'SpaceX BFR Rocket Dev cycle',
  cie: 'SpaceX',
  news: [
  {
    id: 'RAPT',
    dependency: null,
    miniDesc: 'Raptor engine',
    eventDate: '2012-03-02',
    expectedDelivery: '2020-01-02',
    url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    descriptions: 'Initial work on Raptor',
    type: 'hardware',
  },
  {
    id: 'START',
    dependency: null,
    miniDesc: 'Announcement plan',
    eventDate: '2014-03-01',
    expectedDelivery: '2020-01-02',
    url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    descriptions: 'Initial Flight expectation',
    type: 'Info',
  },
  {
    id: 'ITS',
    dependency: null,
    miniDesc: 'ITS (12m)',
    eventDate: '2016-09-01',
    expectedDelivery: '2020-06-02',
    url: 'https://en.wikipedia.org/wiki/ITS_launch_vehicle',
    descriptions: 'Flight to orbit',
    type: 'Info',
  },
  {
    id: 'BFR',
    dependency: null,
    miniDesc: 'BFR (9m)',
    eventDate: '2017-07-01',
    expectedDelivery: '2019-09-02',
    url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    descriptions: 'Flight to orbit',
    type: 'Info',
  },
  {
    id: 'BFRSteel',
    dependency: 'BFR',
    miniDesc: 'BFR Steel switch',
    eventDate: '2018-12-01',
    expectedDelivery: '2019-04-02',
    url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    descriptions: 'First Hop expected',
    type: 'delayed',
    note: 'This never flow in that time, it got delay for later in 2019',
  },
  {
    id: 'MK1',
    dependency: 'BFRSteel',
    miniDesc: 'BFR Steel Proto',
    eventDate: '2019-06-01',
    expectedDelivery: '2020-03-02',
    url: 'https://en.wikipedia.org/wiki/BFR_(rocket)',
    descriptions: 'First Hop expected',
    type: 'hardware',
  }
  ]
};

export const FH = {
  id: 'FR',
  name: 'Falcon heavy',
  descriptions: 'SpaceX Falcon heavy Rocket Dev cycle',
  cie: 'SpaceX',
  news: [
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
  ]
};

export const SLS = {
  id: 'SLS',
  name: 'SLS',
  descriptions: 'Space/Single Launch System',
  cie: 'NASA',
  news: [
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
    dependency: null,
    miniDesc: 'Cancel CP for SLS',
    eventDate: '2011-09-02',
    expectedDelivery: '2017-05-02',
    url: 'https://en.wikipedia.org/wiki/Space_Launch_System',
    descriptions: 'Initial SLS proposition',
    type: 'Info',
  }
  ]
};