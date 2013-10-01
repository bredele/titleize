var titleize = require('titleize');
var assert = require('assert');


describe("titleize", function() {

  it('should capitalize a single word', function() {
    assert(titleize('olivier') === 'Olivier');
  });

  it('should capitalize all the words in a sentence', function {
    assert(titleize('go to our website petrofeed.com') === 'Go To Our Website Petrofeed.com');
  });

});