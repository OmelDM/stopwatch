import React from 'react';
import Display from './Display';

class LapTimerDisplay extends React.Component {
  render() {
    return (
      <Display
        time={this.props.time}
        className='display_laptime'
      />
    );
  }
}

export default LapTimerDisplay;
