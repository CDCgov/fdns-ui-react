import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  icon: 'plus',
  image: '',
  imageAlt: '',
  theme: 'default',
  className: 'icon-button',
  color: 'primary',
  variant: 'text',
  onClick() {},
};

// define the class
class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick =() => {
    this.props.onClick();
  }

  renderCustomImageIcon = () => {
    const { image, imageAlt } = this.props;
    if (!image) return;
    return (
      <img src={image} alt={imageAlt} className="custom-icon" />
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
        <Button aria-label="icon button" color={this.props.color} variant={this.props.variant} onClick={this.handleClick}>
          {this.renderCustomImageIcon()}
          {this.props.children}
        </Button>
      </div>
    )
  }
}

// set the props, defaults and export
IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;