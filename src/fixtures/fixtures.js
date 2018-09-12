import * as $package from '../../package.json';

export const headers = [
  {
    "path": "$.name",
    "label": "Name",
    "visible": true,
    "icon": "tag",
    "iconColor": "307dc3"
  },{
    "path": "$.title",
    "label": "Title",
    "visible": true,
    "icon": "list",
    "iconColor": "ab8835"
  },{
    "path": "$.id",
    "label": "Employee ID",
    "visible": true,
    "icon": "id-card",
    "iconColor": "35ab8c"
  },{
    "path": "$.start",
    "label": "Start Date",
    "visible": true,
    "icon": "calendar",
    "iconColor": "555555"
  },{
    "path": "$.org",
    "label": "Organization",
    "visible": true,
    "icon": "sitemap",
    "iconColor": "555555"
  }
];

export const messages = [
  {
    "name": "Alice",
    "title": "Developer",
    "id": "10001814",
    "start": "01/21/2001",
    "org": "Division of Health Informatics and Surveillance"
  },{
    "name": "Bob",
    "title": "Epidemiologist",
    "id": "10000522",
    "start": "06/02/1999",
    "org": "Division of Health Informatics and Surveillance"
  },{
    "name": "Carol",
    "title": "Manager",
    "id": "10001169",
    "start": "12/01/2000",
    "org": "Office of the Director"
  },{
    "name": "David",
    "title": "Analyst",
    "id": "10000343",
    "start": "05/01/1995",
    "org": "Division of Health Informatics and Surveillance"
  },{
    "name": "Eugene",
    "title": "Informatics Specialist",
    "id": "10000502",
    "start": "02/14/1998",
    "org": "Office of the Chief Information Officer"
  },{
    "name": "Francis",
    "title": "Epidemiologist",
    "id": "10000410",
    "start": "03/17/1996",
    "org": "Office of Public Health Preparedness and Response"
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
