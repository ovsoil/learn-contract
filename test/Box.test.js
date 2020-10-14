// test/Box.test.js
// Load dependencies
// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const Auth = contract.fromArtifact('Auth');
const Box = contract.fromArtifact('Box');

// Start test block
describe('Box', function () {
  const [ owner ] = accounts;

  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.auth = await Auth.new({ from: owner })
    this.contract = await Box.new(this.auth.address, { from: owner });
  });

  // Test case
  it('retrieve returns a value previously stored', async function () {
    // Store a value
    await this.contract.store(42, { from: owner });

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.contract.retrieve()).toString()).to.equal('42');
  });
});
