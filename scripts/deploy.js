async function main() {
  const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"; //the contract we want to interact with

  const MarysContract = await hre.ethers.getContractFactory("MarysContract");
  const contract = await MarysContract.deploy(contractAddress); //passing it as argument, becouse our constructor need it

  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);

  await contract.win(); // calling the function interacting with the contract
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
