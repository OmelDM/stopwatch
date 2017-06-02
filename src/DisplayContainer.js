import React from 'react';
import MainTimerDisplay from './MainTimerDisplay';
import LapTimerDisplay from './LapTimerDisplay';

class DisplayContainer extends React.Component {
  render() {
    return (
      <div className='display-container'>
        <MainTimerDisplay
          time={this.props.mainTime}
        />
        <LapTimerDisplay
          time={this.props.lapTime}
        />
      </div>
    );
  }
}

export default DisplayContainer;
