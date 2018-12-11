import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body1 from './Body/Body1';
import Body2 from './Body/Body2';
import Body3 from './Body/Body3';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body1 />
        <Body2 />
        <Body3 />
        <Footer />
      </div>
    );
  }
}

export default App;
