const Migrations = artifacts.require("CWAMinter");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
