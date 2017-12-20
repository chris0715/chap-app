import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  SideBar from './SideBar'
import NewMessage from './components/newMessage'
import Message from './message'



class App extends Component {
  render() {
    return (
      <div id='container'>
        <SideBar users={[{name: 'marcos'}]} />
        <section id='main'>
          <section id='message-list'>
            <Message  author='tt' message='this is not true its just right' />
          </section>
          <NewMessage />
        </section>
      </div>
    );
  }
}

export default App;
