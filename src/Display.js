import React from 'react';
import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <h2 className={'display ' + this.props.className}>
        {stringFromMilliseconds(this.props.time)}
      </h2>
    );
  }
}

function stringFromMilliseconds(ms) {
  const hours = Math.floor(ms / 3600000);
  const hoursStr = (hours < 10) ? '0' + hours : '' + hours;
  ms = ms % 36000000;
  const min = Math.floor(ms / 60000);
  const minStr = (min < 10) ? '0' + min : '' + min;
  ms = ms % 60000;
  const sec = Math.floor(ms / 1000);
  const secStr = (sec < 10) ? '0' + sec : '' + sec;
  ms = ms % 1000;
  ms = Math.floor(ms / 10);
  const msStr = (ms < 10) ? '0' + ms : '' + ms;
  return (hours !== 0 ? hoursStr + ':' : '') + minStr + ':' + secStr + ',' + msStr;
}

export default Display;
