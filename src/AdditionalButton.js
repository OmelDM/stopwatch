import React from 'react';
import Button from './Button.js';

class AdditionalButton extends React.Component {
  render() {
    return (
      <Button
        className='button_additional'
        onClick = {this.props.onClick}
        disabled={!this.props.isStarted && this.props.isResetted}
      >
        {(!this.props.isStarted && !this.props.isResetted) ? 'Reset' : 'Lap'}
      </Button>
    );
  }
}

export default AdditionalButton;
