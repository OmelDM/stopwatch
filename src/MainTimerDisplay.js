import React from 'react';
import Display from './Display';

class MainTimerDisplay extends React.Component {
  render() {
    return (
      <Display
        time={this.props.time}
        className='display_maintime'
      />
    );
  }
}

export default MainTimerDisplay;
