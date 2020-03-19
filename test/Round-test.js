const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', function () {
  let deck, round, card1, card2, card3, card4, turn;

  it('should be a function', function () {
    deck = new Deck();
    round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('A round should be instantianted with the current deck of cards', function () {
    expect(round.deck).to.deep.equal(cards);
  });

  it('The current Card should be the first Card in the Deck (the array of Cards) at the start of the Round', function () {
    expect(round.deck[round.turns]).to.equal(card1);
  });

  it('the turns should be updated every time that the takeTurn method is called', function () {
    expect(round.turns).to.equal(0);
    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
    round.takeTurn('capybara');
    expect(round.turns).to.equal(2);
  });

  it('it should keep track of incorrect guesses & iterate to the next card in deck', function () {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses.length).to.equal(2);
    round.takeTurn('Fitzgerald');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.turns).to.equal(3);
  });

  it('it should provide feedback based on the guess being correct / incorrect', function () {
    turn = new Turn('pug', card1);
    round.takeTurn('pug');
    expect(turn.giveFeedback()).to.equal('😞 INCORRECT! No Dice! Try Again!');
    turn = new Turn('gallbladder', card2);
    round.takeTurn('gallbladder');
    expect(turn.giveFeedback()).to.equal('🤩 CORREECT! Boo-Yah! Yahtzee! Eureka!');
  });

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    card4 = new Card(15, 'What is John\'s favorite ungulate?', ['Deer', 'Elk', 'Pronghorn'], 'Elk');
    cards = [card1, card2, card3, card4];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('at the end of a round, it should return the percentage correct as a message', function () {
    expect(round.incorrectGuesses.length).to.equal(0);
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.equal(1);
    round.takeTurn('spleen');
    expect(round.incorrectGuesses.length).to.equal(2);
    round.takeTurn('Fitzgerald');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.turns).to.equal(3);
    expect(round.calculatePercentCorrect()).to.equal(33);
    round.takeTurn('Elk');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.turns).to.equal(4);
    expect(round.calculatePercentCorrect()).to.equal(50);
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });

});
