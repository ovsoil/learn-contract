// test/NewBox.test.js

// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const NewBox = contract.fromArtifact('NewBox');

// Start test block
describe('NewBox', function () {
  const [ owner ] = accounts;

  beforeEach(async function () {
    // Deploy a new NewBox contract for each test
    this.contract = await NewBox.new({ from: owner });
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value - recall that only the owner account can do this!
    await this.contract.store(42, { from: owner });

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.contract.retrieve()).toString()).to.equal('42');
  });
});
