import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

// set the prop types from predefined shapes or standard types
const propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  bsStyle: PropTypes.string,
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  icon: 'plus',
  image: '',
  imageAlt: '',
  theme: 'default',
  className: '',
  bsStyle: 'default',
  onClick() {},
};

// Update custom bsStyles
Button.propTypes.bsStyle = PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'info', 'alternate', 'transparent', 'clear', 'white']);

// define the class
class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick =() => {
    this.props.onClick();
  }

  renderIcon = () => {
    const { icon, image, imageAlt } = this.props;

    if (image === '') {
      return (
        <i className={`fa fa-${this.props.icon}`}></i>
      );
    }

    return (
      <img src={image} alt={imageAlt} className="icon" />
    )
  }

  // main render method
  render() {
    let className = classNames({
      'icon-button': true,
      'light': (this.props.theme === 'light')
    });

    // add from the props (if we have it)
    className += ` ${this.props.className}`;

    return (
      <div className={className}>
        <Button bsStyle={this.props.bsStyle} onClick={this.handleClick}>
          {this.renderIcon()}
          <span>{this.props.children}</span>
        </Button>
      </div>
    )
  }
}

// set the props, defaults and export
IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;