var expect = require('chai').expect;
var calculator = {
  /* Basic arithmatic functions */
  add: function(a,b){ return a + b; },
  subtract: function(a,b){ return a - b; },
  multiply: function(a,b){ return a * a; },
  divide: function(a,b){ return a / b; },
  squared: function(n){ return n * n; },
  /* Look up the Math object on W3 schools or Mozilla */
  /* E.G. power(2,3) is two to the third power */
  power: function(n,p){ return Math.pow(n,p); },
  /* E.G. squareRoot(9) is 3 */
  squareRoot: function(n){ return Math.sqrt(n); },
  /* E.G. Rounds up a number roundUp(3.1) will be "4" */
  roundUp: function(n){ return Math.floor(n); },
  /* E.G. Rounds down a number roundUp(3.1) will be "3" */
  roundDown: function(n){ return Math.ceil(n); },
  /* BONUS: write a function that returns a random number between 1-10,
  and figure out a way to test it, *Use stackOverflow* HINT: a loop when testing */
  random: function(){
  }
};

/* Write Mocha/Chai Tests here */
/* Starter Code */
describe('Calculator functions work', function(){

  it('calculator.add works correctly',function(){
    expect(calculator.add(1,2)).to.equal(3);
  });

});
