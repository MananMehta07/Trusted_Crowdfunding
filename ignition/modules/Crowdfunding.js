const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token");

  return { token };
});

module.exports = TokenModule;

const CF=buildModule("Crowdfunding",(m)=>{
  const cf = m.contract("Crowdfunding",["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);
  return { cf };
});

module.exports = CF
