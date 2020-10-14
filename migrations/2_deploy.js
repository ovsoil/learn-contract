const Auth = artifacts.require("Auth");
const MyBox = artifacts.require("MyBox");

module.exports = function (deployer) {
  deployer.deploy(Auth).then(function() {
    return deployer.deploy(MyBox, Auth.address)
  });
};
