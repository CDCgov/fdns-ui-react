import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';

// set the prop types from predefined shapes or standard types
const propTypes = {
  /** A custom image string you may use in place of an Icon */
  image: PropTypes.string,
  /** custom image Alt name for accessibility purposes */
  imageAlt: PropTypes.string,
  /** The color of the button */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'tertiary',
  ]),
  /** The type of button container */
  variant: PropTypes.oneOf([
    'text',
    'outlined',
    'contained',
  ]),
  /** onClick event, by default does nothing */
  onClick: PropTypes.func,
};

// set the defaults
const defaultProps = {
  icon: 'plus',
  image: '',
  imageAlt: 'custom image',
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