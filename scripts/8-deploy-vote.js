import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "WendelDAO Voting Contract",
      voting_token_address: "0x2241f727BAcc72Cd520dd38023cb9e2A5C075bb9",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (error) {
    console.error("Failed to deploy vote contract", error);
  }
})();
