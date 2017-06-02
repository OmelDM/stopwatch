import React from 'react';
import Button from './Button.js';

class MainButton extends React.Component {
  render() {
    const colorClass = (this.props.isStarted) ? 'button_red' : 'button_green';

    return (
      <Button
        className={'button_main ' + colorClass}
        onClick = {this.props.onClick}
        disabled={this.props.disabled}
      >
        {(this.props.isStarted) ? 'Stop' : 'Start'}
      </Button>
    );
  }
}

export default MainButton;
