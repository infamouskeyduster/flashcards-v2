const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
describe('Deck', function () {
  let deck, card1, card2, card3, cards;

  it('should be a function', function(){
    deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('be instantiated with an array of Card objects', function () {
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should know how many cards are in the Deck', function () {
    expect(deck.countCards()).to.equal(3);
  });
});
