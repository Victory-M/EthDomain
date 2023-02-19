const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};
//  0x8dA47DD12384f3A0c711E0cCb8Ac60D50d0e8cC8
async function main() {
  // setup accounts and variables
  const [deployer] = await ethers.getSigners();
  const NAME = "ETH Daddy";
  const SYMBOL = "ETHD";

  const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
  const ethDaddy = await ETHDaddy.deploy(NAME, SYMBOL);
  await ethDaddy.deployed();

  console.log(`Deployed Domain Contract at: ${ethDaddy.address}\n`);

  // List 6 domains
  const names = [
    "jack.eth",
    "john.eth",
    "henry.eth",
    "cobalt.eth",
    "oxygen.eth",
    "carbon.eth",
  ];
  const costs = [
    tokens(10),
    tokens(25),
    tokens(15),
    tokens(2.5),
    tokens(3),
    tokens(1),
  ];

  for (var i = 0; i < 6; i++) {
    const transaction = await ethDaddy
      .connect(deployer)
      .list(names[i], costs[i]);
    await transaction.wait();

    console.log(`Listed Domain ${i + 1}: ${names[i]}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
