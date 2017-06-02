import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <h1 className='app__title'>Stopwatch</h1>
        <main className='app__content'>
          <Stopwatch />
        </main>
      </section>
    );
  }
}

export default App;
