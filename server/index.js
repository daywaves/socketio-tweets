import io from 'socket.io';
import Twitter from 'node-tweet-stream';

const {
  CONSUMER_KEY: consumer_key,
  CONSUMER_SECRET: consumer_secret,
  TOKEN: token,
  TOKEN_SECRET: token_secret,
} = process.env;
const tw = new Twitter({
  consumer_key,
  consumer_secret,
  token,
  token_secret,
});

const socket = io(3001);

tw.track('javascript');
tw.track('hello world');

tw.on('tweet', tweet => socket.emit('tweet', tweet));
