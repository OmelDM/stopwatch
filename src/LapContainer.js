import React from 'react';
import Display from './Display';
import './LapContainer.css';

class LapContainer extends React.Component {
  render() {
    const lapsElements = this.props.laps.map((lap, index, laps) => {
      const prevValues = laps.slice(0, index);
      const sum = prevValues.reduce((sum, value) => {
        return sum + value;
      }, lap);

      return (
        <tr key={sum}>
          <td>{index + 1}</td>
          <td><Display time={lap} /></td>
          <td><Display time={sum} /></td>
        </tr>
      );
    });

    return (
      <table className='laps'>
        <thead>
          <tr>
            <th>#</th>
            <th>Lap</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {lapsElements.reverse()}
        </tbody>
      </table>
    );
  }
}

export default LapContainer;
