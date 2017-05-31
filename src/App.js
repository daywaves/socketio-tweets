import React, { Component } from 'react';
import io from 'socket.io-client';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }
  componentDidMount() {
    this.socket = io('http://:3001/');
    this.socket.on('tweet', tweet => this.setState({ tweets: [tweet, ...this.state.tweets] }));
  }
  render() {
    return (
      <div className="tweets">
        {this.state.tweets.map(t => <Tweet key={t.id} {...t} />)}
      </div>
    );
  }
}

export default App;
