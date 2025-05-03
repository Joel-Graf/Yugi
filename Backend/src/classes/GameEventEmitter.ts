import { Game } from "./Game";

const EventEmitter = require('events');

class GameEventEmitter extends EventEmitter {
  game: Game;

  constructor(game: Game) {
    super();
    this.game = game;
  }

  // TRIGGERS
  createGame() {
    console.log('createGame is about to be triggered...');
    // this.emit('createGame', {});
  }

  joinGame() {
    console.log('joinGame is about to be triggered...');
  }

  moveMonster() {
    console.log('moveMonster is about to be triggered...');

  }

  attackMonster() {
    console.log('attackMonster is about to be triggered...');

  }
}

// // Create an instance of GameEventEmitter
// const gameEventEmitter = new GameEventEmitter();

// // Listen for the 'myEvent' event
// GameEventEmitter.on('myEvent', (message) => {
//   console.log(`Received message: ${message}`);
// });

// // Trigger the event
// GameEventEmitter.triggerEvent();
