async function main() {
  // eslint-disable-next-line no-undef
  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK"], 9000);
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });