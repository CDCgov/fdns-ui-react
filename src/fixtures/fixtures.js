import * as $package from '../../package.json';

export const headers = [
  {
    'path': '$.name',
    'label': 'Name',
    'visible': true,
    'icon': 'tag',
    'iconColor': '307dc3',
    'width': 50
  },{
    'path': '$.title',
    'label': 'Title',
    'visible': true,
    'icon': 'list',
    'iconColor': 'ab8835',
    'width': 50
  },{
    'path': '$.id',
    'label': 'Employee ID',
    'visible': true,
    'icon': 'id-card',
    'iconColor': '35ab8c',
    'width': 75
  },{
    'path': '$.start',
    'label': 'Start Date',
    'visible': true,
    'icon': 'calendar',
    'iconColor': '555555',
    'width': 50
  },{
    'path': '$.org',
    'label': 'Organization',
    'visible': true,
    'icon': 'sitemap',
    'iconColor': '555555',
    'width': 100
  }
];

export const messages = [
  {
    'name': 'Alice',
    'title': 'Developer',
    'id': '10001814',
    'start': '01/21/2001',
    'org': 'DHIS'
  },{
    'name': 'Bob',
    'title': 'Epidemiologist',
    'id': '10000522',
    'start': '06/02/1999',
    'org': 'DHIS'
  },{
    'name': 'Carol',
    'title': 'Manager',
    'id': '10001169',
    'start': '12/01/2000',
    'org': 'OD'
  },{
    'name': 'David',
    'title': 'Analyst',
    'id': '10000343',
    'start': '05/01/1995',
    'org': 'DHIS'
  },{
    'name': 'Eugene',
    'title': 'Informatics Specialist',
    'id': '10000502',
    'start': '02/14/1998',
    'org': 'OCIO'
  },{
    'name': 'Francis',
    'title': 'Epidemiologist',
    'id': '10000410',
    'start': '03/17/1996',
    'org': 'OPHPR'
  }
];

export const errors = [
  {
    type: 'Structure',
    key: 'MSH-10',
    description: 'Message Control Id missing'
  },{
    type: 'Structure',
    key: 'MSH-12',
    description: 'Version Id missing'
  }
];

export const warnings = [
  {
    type: 'Vocabulary',
    key: 'OBX-5',
    description: 'Observation Value missing'
  },{
    type: 'Vocabulary',
    key: 'OBX-6',
    description: 'Units missing'
  }
];

export const optionsType = [
  { value: 'HL7', label: 'HL7' },
  { value: 'CDA', label: 'CDA' }
];

export const defaultFilters = {
  date: {
    start: null,
    end: null
  },
  condition: {
    value: ''
  },
  dataType: {
    value: ''
  },
  jurisdiction: {
    value: ''
  },
  caseId: {
    value: ''
  },
  everything: {
    value: ''
  },
  must: {
    value: ''
  },
  should: {
    value: ''
  },
  mustNot: {
    value: ''
  }
};

export const activity = {
  page: 1,
  pageSize: 50,
  view: 'list',
  rowsLimit: 6,
  layersActive: false,
  useNetwork: false,
  search: {
    query: '',
    total: 0
  },
  defaultSearch: {
    query: '',
    total: 0
  },
  sidebar: {
    collapsed: false,
    tabs: 'main',
    filters: defaultFilters,
    errors: errors,
    warnings: warnings
  },
  dropdowns: {
    downloadsOpen: false
  }
};

export const history = {
  'October 11': [
    { title: 'title1', subtitle: 'subtitle1' },
    { title: 'title2', subtitle: 'subtitle2' },
    { title: 'title3', subtitle: 'subtitle3' },
  ],
  'October 12': [
    { title: 'title1', subtitle: 'subtitle1' },
    { title: 'title2', subtitle: 'subtitle2' },
    { title: 'title3', subtitle: 'subtitle3' },
  ],
}

export const downloads = [
  {
    file: 'search-results1234567.csv.zip',
    active: true,
    now: 60,
    date: null
  },{
    file: 'search-results1234567.csv.zip',
    active: true,
    now: 80,
    date: null
  },{
    file: 'search-results1234567.csv.zip',
    active: false,
    now: 100,
    date: '9:33 AM 12/14/16'
  },{
    file: 'search-results1234567.csv.zip',
    active: false,
    now: 100,
    date: '9:33 AM 12/14/16'
  }
];

export const version = $package.version;
