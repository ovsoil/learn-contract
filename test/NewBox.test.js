// test/NewBox.test.js
// Load dependencies
const { expect } = require('chai');

// Load compiled artifacts
const NewBox = artifacts.require('NewBox');

// Start test block
contract('NewBox', function () {
  beforeEach(async function () {
    // Deploy a new NewBox contract for each test
    this.newbox = await NewBox.new();
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.newbox.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.newbox.retrieve()).toString()).to.equal('42');
  });
});
