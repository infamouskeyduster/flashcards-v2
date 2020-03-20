const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
    this.endTime = null;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck[this.turns].id);
    }
    this.turns ++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numOfIncorrect = this.incorrectGuesses.length;
    return Math.round((((this.turns - numOfIncorrect) / this.turns) * 100));
  }

  endRound() {
    this.endTime = Date.now();
    let timeBetweenEndandStartMili = this.endTime - this.startTime;
    let timeElapsed = Math.round(timeBetweenEndandStartMili / 1000);
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! This round took you ${timeElapsed} seconds to complete!`);
  }
}
module.exports = Round;
