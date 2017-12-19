import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <aside id='sidebar'>
          Users
        </aside>
        <section id='main'>
          <section id='message-list'></section>
          <section id='new-message'></section>
        </section>
      </div>
    );
  }
}

export default App;
