import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// set the prop types from predefined shapes or standard types
const propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
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
  className: '',
  color: 'default',
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

  renderIcon = () => {
    const { icon, image, imageAlt } = this.props;

    if (image === '') {
      return (
        <FontAwesomeIcon icon={this.props.icon} />
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
        <Button color={this.props.color} variant={this.props.variant} onClick={this.handleClick}>
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