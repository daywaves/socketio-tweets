import React, { Component } from 'react';
import io from 'socket.io-client';
import Tweet from './Tweet';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }
  componentDidMount() {
    this.socket = io('http://:3001/');
    this.socket.on('tweet', tweet => this.setState({ tweets: [...this.state.tweets, tweet] }));
  }
  render() {
    return (
      <div>
        {this.state.tweets.map(t => <Tweet {...t} />)}
      </div>
    );
  }
}

export default App;
