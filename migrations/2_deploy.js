const Auth = artifacts.require("Auth");
const Box = artifacts.require("Box");

module.exports = function (deployer) {
  deployer.deploy(Auth).then(function() {
    return deployer.deploy(Box, Auth.address)
  });
};
