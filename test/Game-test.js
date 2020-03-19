const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');

describe('Game', function () {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round', function () {
    expect(game.currentRound).to.equal(null);
  });

  it('should contain a method that starts everything…', function () {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
