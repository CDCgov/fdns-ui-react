import PropTypes from 'prop-types';

export const _header = PropTypes.shape({
  path: PropTypes.string,
  label: PropTypes.string,
  visible: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  iconColor: PropTypes.string,
});

export const _headers = PropTypes.arrayOf(_header);

export const _historyItem = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
});

export const _history = PropTypes.object;

export const _message = PropTypes.object;
export const _messages = PropTypes.arrayOf(_message);

export const _option = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
});

export const _filters = PropTypes.shape({
  date: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  }),
  condition: PropTypes.shape({
    value: PropTypes.string,
  }),
  dataType: PropTypes.shape({
    value: PropTypes.string,
  }),
  jurisdiction: PropTypes.shape({
    value: PropTypes.string,
  }),
  caseId: PropTypes.shape({
    value: PropTypes.string,
  }),
  everything: PropTypes.shape({
    value: PropTypes.string,
  }),
  must: PropTypes.shape({
    value: PropTypes.string,
  }),
  should: PropTypes.shape({
    value: PropTypes.string,
  }),
  mustNot: PropTypes.shape({
    value: PropTypes.string,
  }),
});

export const _warningOrError = PropTypes.shape({
  type: PropTypes.string,
  key: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
});

export const _warnings = PropTypes.arrayOf(_warningOrError);

export const _errors = PropTypes.arrayOf(_warningOrError);

export const _analysis = PropTypes.shape({
  valid: PropTypes.bool,
  warnings: PropTypes.number,
  explanation: PropTypes.array,
  errors: PropTypes.number,
});

export const _sidebar = PropTypes.shape({
  collapsed: PropTypes.bool,
  tabs: PropTypes.string,
  filters: _filters,
  errors: _errors,
  warnings: _warnings,
});

export const _dropdowns = PropTypes.shape({
  downloadsOpen: PropTypes.bool,
  notificationsOpen: PropTypes.bool,
  profileOpen: PropTypes.bool,
});

export const _downloadFile = PropTypes.shape({
  size: PropTypes.number,
  drawer: PropTypes.string,
  modified: PropTypes.string,
  etag: PropTypes.string,
  id: PropTypes.string,
});

export const _downloadEvent = PropTypes.shape({
  event: PropTypes.string,
  timestamp: PropTypes.string,
});

export const _download = PropTypes.shape({
  file: _downloadFile,
  query: PropTypes.string,
  format: PropTypes.string,
  progress: PropTypes.number,
  _id: PropTypes.string,
  events: PropTypes.arrayOf(_downloadEvent),
  status: PropTypes.oneOf(['RUNNING', 'COMPLETED', 'ERROR']),
});

export const _downloads = PropTypes.arrayOf(_download);

export const _user = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  org: PropTypes.string,
  avatar: PropTypes.string,
});
