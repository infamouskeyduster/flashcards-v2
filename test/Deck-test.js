const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
describe('Deck', function () {
  let deck, card1, card2, card3;

  it('should be a function', function(){
    deck = new Deck();
    expect(Deck).to.be.a('function');
  });

});
