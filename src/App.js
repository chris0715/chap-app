import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  SideBar from './SideBar'

class App extends Component {
  render() {
    return (
      <div id='container'>
        <SideBar />
        <section id='main'>
          <section id='message-list'>55</section>
          <section id='new-message'>66</section>
        </section>
      </div>
    );
  }
}

export default App;
