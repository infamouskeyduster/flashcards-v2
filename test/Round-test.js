const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', function () {
  let deck, round, card1, card2, card3;

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

  it('A round should be inmstantianted with the current deck of cards', function () {
    expect(round.deck).to.deep.equal(cards);
  });


});
