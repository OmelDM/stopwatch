import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <button
        className={'button ' + this.props.className}
        onClick = {this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
