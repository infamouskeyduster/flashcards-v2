const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
describe('Turn', function(){

  let card, turn;

  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  beforeEach(function(){
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);
  });

  it('should accept two arguments when instantiating Turn', function () {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.equal(card);
  });

  it('should have a method that returns the player\'s guess', function () {
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should have a method that returns the current card in play', function () {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method that evaluates a player\'s guess and returns T/F', function () {
    turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
    turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should have a method that provides a player with feedback based on their guess', function () {
    turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('😞 INCORRECT! No Dice! Try Again!');
    turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('🤩 CORREECT! Boo-Yah! Yahtzee! Eureka!');
  });
});
