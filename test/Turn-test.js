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


});
