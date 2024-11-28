const { expect } = require("chai");
const { ethers } = require("hardhat");
const { toWei, fromWei } = require("./Utils");
describe("SimpleDeFiToken", () => {
  let deployer, addr1, addr2, token;
  beforeEach(async () => {
    [deployer, addr1, addr2] = await ethers.getSigners();
    const tokenContractFactory = await ethers.getContractFactory(
      "SimpleDeFiToken"
    );
    token = await tokenContractFactory.deploy();
  });
});
