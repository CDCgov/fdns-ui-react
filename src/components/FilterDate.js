import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import LuxonUtils from '@date-io/luxon';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

// default date format
const defaultDateFormat = 'yyyy-MM-dd';

// set the prop types from predefined shapes or standard types
const propTypes = {
  start: PropTypes.instanceOf(Date),
  startLabel: PropTypes.string,
  end: PropTypes.instanceOf(Date),
  endLabel: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onStartChanged: PropTypes.func,
  onEndChanged: PropTypes.func,
};

// set the defaults
const defaultProps = {
  start: new Date(),
  startLabel: 'Start Date',
  end: new Date(),
  endLabel: 'End Date',
  icon: 'calendar'
};

// custom inputs
class StartInput extends React.Component {
  render() {
    return <input aria-label="Start Date" {...this.props} />;
  }
}
class EndInput extends React.Component {
  render() {
    return <input aria-label="End Date" {...this.props} />;
  }
}

// define the class
class FilterDate extends Component {

  // init
  constructor(props) {
    super(props);
    this.state = {
      start: this.props.start,
      end: this.props.end
    };
    this.onStartChanged = this.onStartChanged.bind(this);
    this.onEndChanged = this.onEndChanged.bind(this);
    this.reset = this.reset.bind(this);
    this.convertDateToISO = this.convertDateToISOString.bind(this);
  }

  // update the state on prop changes
  componentWillReceiveProps(nextProps) {
    this.setState({
      start: this.convertDateToISOString(nextProps.start),
      end: this.convertDateToISOString(nextProps.end)
    })
  }

  // handler for the start value change
  onStartChanged (value) {
    this.setState({
      start: value
    });
  }

  // handler for the end value change
  onEndChanged (value) {
    this.setState({
      end: value
    });
  }

  // convert the date format to ISO
  convertDateToISOString(date) {
    if (date) return moment(date, defaultDateFormat).toISOString();
    return date;
  }

  // method to apply a filter
  apply() {
    const start = (this.state.start !== null) ? moment(this.state.start).format(defaultDateFormat) : null;
    const end = (this.state.end !== null) ? moment(this.state.end).format(defaultDateFormat) : null;

    return {
      start,
      end
    };
  }

  // method to reset a filter
  reset() {
    this.setState({
      start: new Date(),
      end: new Date(),
    });
  }

  // main render method
  render() {
    const startPicker = (
      <DatePicker
        id="startDate"
        margin="normal"
        className="dayPickerInput"
        label={this.props.startLabel}
        value={this.state.start}
        onChange={this.onStartChanged}
      />
    );

    const endPicker = (
      <DatePicker
        id="endDate"
        margin="normal"
        className="dayPickerInput"
        label={this.props.endLabel}
        value={this.state.end}
        onChange={this.onEndChanged}
      />
    );

    return (
      <div className="filter-date">
        <MuiPickersUtilsProvider utils={LuxonUtils}>
          {startPicker}
          {endPicker}
        </MuiPickersUtilsProvider>
      </div>
    )
  }
}

// set the props, defaults and export
FilterDate.propTypes = propTypes;
FilterDate.defaultProps = defaultProps;

export default FilterDate;