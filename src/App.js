import React, { Component } from 'react';
import Router from './Router';
import PageOne from './samplePages/PageOne';
class App extends Component {
  render() {
    return (
      <Router entryPage={PageOne}/>
    );
  }
}

export default App;
