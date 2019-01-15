import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';

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
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    });

    return (
      <div className="option-page-limit">
        <FormControl
          variant="outlined"
        >
          <InputLabel
            htmlFor={`outlined-select-page-limit`}
          >
            Show
          </InputLabel>
          <Select
            value={selected}
            autoWidth={false}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                name="page-limit"
                labelWidth={40}
                id={`outlined-select-page-limit`}
              />
            }
          >
            {options}
          </Select>
        </FormControl>
      </div>
    );
  }
}

// set the props, defaults and export
OptionPageLimit.propTypes = propTypes;
OptionPageLimit.defaultProps = defaultProps;

export default OptionPageLimit;
