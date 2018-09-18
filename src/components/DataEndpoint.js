import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// set the prop types from predefined shapes or standard types
const propTypes = {
  endpoint: PropTypes.string,
};

// set the defaults
const defaultProps = {
  endpoint: window.location.href,
};

// define the class
class DataEndpoint extends Component {

  // copy event passed
  handleCopy = (e) => {
    const input = e.target.parentElement.parentElement.children[0];
    if (input) {
      input.select();
      document.execCommand('copy');
      input.blur();
    }
  }

  // main render method
  render() {
    const { endpoint } = this.props;

    return (
      <div className="data-endpoint">
        <InputGroup>
          <FormControl
            aria-label="Data Endpoint"
            type="text"
            value={endpoint}
            readOnly={true}
          />
          <InputGroup.Addon className="copy">
            <FontAwesomeIcon icon="clipboard" onClick ={this.handleCopy} />
          </InputGroup.Addon>
        </InputGroup>
      </div>
    )
  }
}

// set the props, defaults and export
DataEndpoint.propTypes = propTypes;
DataEndpoint.defaultProps = defaultProps;

export default DataEndpoint;