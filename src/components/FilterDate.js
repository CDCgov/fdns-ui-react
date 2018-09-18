import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import Filter from './Filter';

// default date format
const defaultDateFormat = 'MM-DD-YYYY';

// set the prop types from predefined shapes or standard types
const propTypes = {
  start: PropTypes.string,
  startLabel: PropTypes.string,
  end: PropTypes.string,
  endLabel: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
};

// set the defaults
const defaultProps = {
  start: '',
  startLabel: 'Start Date',
  end: '',
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
      start: this.convertDateToISOString(this.props.start),
      end: this.convertDateToISOString(this.props.end)
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
      start: '',
      end: ''
    });
  }

  // main render method
  render() {
    const startPicker = (
      <DayPickerInput
        value={this.state.start}
        onDayChange={this.onStartChanged}
        format={defaultDateFormat}
        component={StartInput}
      />
    );

    const endPicker = (
      <DayPickerInput
        value={this.state.end}
        onDayChange={this.onEndChanged}
        format={defaultDateFormat}
        component={EndInput}
      />
    );

    return (
      <div className="filter-date">
        <Filter icon={this.props.icon} label={this.props.startLabel} control={startPicker} ref="start" />
        <Filter icon={this.props.icon} label={this.props.endLabel} control={endPicker} ref="end" />
      </div>
    )
  }
}

// set the props, defaults and export
FilterDate.propTypes = propTypes;
FilterDate.defaultProps = defaultProps;

export default FilterDate;