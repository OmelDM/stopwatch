import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';
import Display from './Display';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleMainButtonClick = this._handleMainButtonClick.bind(this);
    this._handleAdditionalButtonClick = this._handleAdditionalButtonClick.bind(this);

    this.state = {
      mainTime: 0,
      isStarted: false,
      isResetted: true,
    };

    this._mainTimer = new Timer();
    this._mainTimer.addObserver(this);
  }

  timerDidUpdate() {
    this.setState({
      mainTime: this._mainTimer.time
    });
  }

  _handleMainButtonClick() {
    const isStarted = !this.state.isStarted;

    if (isStarted) {
      // Handle 'Start' click
        this._mainTimer.start();
    } else {
      // Handle 'Stop' click
      this._mainTimer.stop();
    }

    this.setState({
      isStarted: isStarted,
      isResetted: false,
    });
  }

  _handleAdditionalButtonClick() {
    if (this.state.isStarted) {
      // Handle 'Lap' click
      alert(this._mainTimer.time);
    } else if (!this.state.isResetted) {
      // Handle 'Reset' click
      this._mainTimer.reset();
      this.setState({
        isStarted: false,
        isResetted: true
      });
    }
  }

  render() {
    const MainButton = Button;
    const AdditionalButton = Button;

    return (
      <div className="red">
        <Display time={this.state.mainTime} />
        <AdditionalButton
          onClick={this._handleAdditionalButtonClick}
          disabled={!this.state.isStarted && this.state.isResetted}
        >
          {(!this.state.isStarted && !this.state.isResetted) ? 'Reset' : 'Lap'}
        </AdditionalButton>
        <MainButton onClick={this._handleMainButtonClick}>
          {(this.state.isStarted) ? 'Stop' : 'Start'}
        </MainButton>
      </div>
    );
  }
}

export default App;
