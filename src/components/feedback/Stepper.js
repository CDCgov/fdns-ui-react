import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  layout: PropTypes.string,
  statuses: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string,
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
    const { status, statuses } = this.props;
    const index = statuses.indexOf(status);

    return (
      <React.Fragment>
        {
          statuses.map((status, key) => {
            return (
              <div className="Stepper-box" key={key}>
                <div className="Stepper-icon">
                  <Tooltip title={status} aria-label={status}>
                    <span
                      className={classnames({
                        'Stepper-circle': true,
                        'active': (key <= index),
                      })}
                    />
                  </Tooltip>
                  {
                    (key < (statuses.length - 1)) ? (
                      <span
                        className={classnames({
                          'Stepper-connector': true,
                          'active': (key < index),
                        })}
                      />
                    ) : null
                  }
                </div>
                <div className="Stepper-status">
                  <div className="Stepper-status-title">{status}</div>
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
    const { status, statuses } = this.props;
    const index = statuses.indexOf(status);

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
                      'active': (key <= index),
                    })}
                  />
                </Tooltip>
                {
                  (key < (statuses.length - 1)) ? (
                    <span
                      className={classnames({
                        'Stepper-connector': true,
                        'active': (key < index),
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
