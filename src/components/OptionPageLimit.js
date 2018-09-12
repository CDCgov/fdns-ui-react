import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel } from 'react-bootstrap';

// set the prop types from predefined shapes or standard types
const propTypes = {
  limits: PropTypes.arrayOf(PropTypes.number),
  defaultLimitIndex: PropTypes.number,
  onChange: PropTypes.func,
};

// set the defaults
const defaultProps = {
  limits: [10, 25, 50, 100],
  defaultLimitIndex: 1,
  onChange() {},
};

// define the class
class OptionPageLimit extends Component {
  
  // init
  constructor(props) {
    super(props);

    const { limits, defaultLimitIndex } = props;

    this.state = {
      selected: limits[defaultLimitIndex],
    }
  }

  // handle change
  handleChange = (e) => {
    const selected = parseInt(e.target.value, 10);

    this.setState({
      selected,
    });

    this.props.onChange(selected);
  }

  render() {
    const { limits } = this.props;
    const { selected } = this.state;

    const options = limits.map(i => {
      return (
        <option key={i} value={i}>{i}</option>
      );
    });

    return (
      <div className="option-page-limit">
        <Form inline>
          <FormGroup>
            <ControlLabel>Show</ControlLabel>
            <select
              aria-label="Show Entries"
              value={selected}
              className="form-control"
              onChange={this.handleChange}
            >
              {options}
            </select>
            <ControlLabel>entries</ControlLabel>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

// set the props, defaults and export
OptionPageLimit.propTypes = propTypes;
OptionPageLimit.defaultProps = defaultProps;

export default OptionPageLimit;
