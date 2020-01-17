import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { _status } from '../../fixtures/shapes';
import { Tooltip, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import isString from 'lodash/isString';

// set the prop types from predefined shapes or standard types
const propTypes = {
  layout: PropTypes.oneOf([
    'vertical',
    'horizontal',
  ]),
  /** The array of status objects or strings that can exist in the series. */
  statuses: PropTypes.oneOfType([
    PropTypes.arrayOf(_status),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /** The current status of the series. */
  currentStatus: PropTypes.string,
};

// set the defaults
const defaultProps = {
  layout: 'vertical',
  statuses: [],
};

// define the class
class Stepper extends Component {
  // render the vertical layout
  renderVertical() {
    const { currentStatus, statuses } = this.props;
    let index = statuses.findIndex(s => {
      if (s.status) return s.status === currentStatus;
    });
    if (isString(statuses[0])) {
      index = statuses.indexOf(currentStatus);
    }

    return (
      <React.Fragment>
        {
          statuses.map((statusItem, key) => {
            let status = statusItem;
            let substatus = '';
            if (!isString(statusItem)) {
              status = statusItem.status;
              substatus = statusItem.substatus;
            }
            return (
              <div className="Stepper-box" key={key}>
                <div className="Stepper-icon">
                  <Tooltip title={status} aria-label={status}>
                    <span
                      className={classnames({
                        'Stepper-circle': true,
                        'active': (key < index),
                        'in-progress': (key === index),
                      })}
                    />
                  </Tooltip>
                  {
                    key < index ? (
                      <CheckIcon className="check-icon" />
                    ) : (
                      <Typography className="number-label">{key + 1}</Typography>
                    )
                  }
                  {
                    (key < (statuses.length - 1)) ? (
                      <span
                        className={classnames({
                          'Stepper-connector': true,
                          'active': (key < index - 1),
                          'in-progress': (key === index - 1),
                        })}
                      />
                    ) : null
                  }
                </div>
                <div className="Stepper-status">
                  <div className="Stepper-status-title">{status}</div>
                  {
                    substatus ? (
                      <div className="Stepper-status-subtitle">{substatus}</div>
                    ) : (
                      null
                    )
                  }
                </div>
              </div>
            );
          })
        }
      </React.Fragment>
    );
  }

  // render the horizontal layout
  renderHorizontal() {
    const { currentStatus, statuses } = this.props;
    const index = statuses.indexOf(currentStatus);

    return (
      <React.Fragment>
        <div className="Stepper-status">{status}</div>
        {
          statuses.map((status, key) => {
            return (
              <React.Fragment key={key}>
                <Tooltip title={status} aria-label={status}>
                  <span
                    className={classnames({
                      'Stepper-circle': true,
                      'active': (key < index),
                      'in-progress': (key === index),
                    })}
                  />
                </Tooltip>
                {
                  (key < (statuses.length - 1)) ? (
                    <span
                      className={classnames({
                        'Stepper-connector': true,
                        'active': (key < index - 1),
                        'in-progress': (key === index - 1),
                      })}
                    />
                  ) : null
                }
              </React.Fragment>
            );
          })
        }
      </React.Fragment>
    );
  }

  // main render method
  render() {
    return (
      <div className={`Stepper ${this.props.layout}`}>
        {
          (this.props.layout === 'vertical') ? this.renderVertical() : this.renderHorizontal()
        }
      </div>
    );
  }
}

// set the props, defaults and export
Stepper.propTypes = propTypes;
Stepper.defaultProps = defaultProps;

export default Stepper;
