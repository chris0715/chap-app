import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  SideBar from './containers/SideBar'
import AddMessage from './containers/AddMessage'
import MessageList from './containers/MessageList'
import io from 'socket.io'



class App extends Component {
  render() {
    return (
      <div id='container'>
        <SideBar users={[{name: 'marcos'}]} />
        <section id='main'>
          <section id='message-list'>
            <MessageList />
          </section>
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
