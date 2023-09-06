const { network } = require("hardhat")
const { verify } = require("../utils/verify")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
require("dotenv").config()
const fs = require('fs')
const path = require('path')

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log("----------------------------------------------------")
    log("Deploying TranscriptRegistry Smart Contract and waiting for confirmations...")
    const transcriptRegistry = await deploy("TranscriptRegistry", {
        from: deployer,
        args: [],
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`TranscriptRegistry deployed at ${transcriptRegistry.address}`)
    // const abi = JSON.stringify(transcriptRegistry.abi, null, 2)
    // // log(`Abi is : ${abi}`)
    // const jsFileContent = `export const contractAddress = "${transcriptRegistry.address}";\nexport const abi = ${abi};`;
    // fs.writeFileSync(process.env.CONSTANTS_PATH, jsFileContent);
    // const filePath = path.join(__dirname, "/Users/admin/Desktop/Transcripts-Verification/clientide/src/utils/constants.js");
    // const filePath = "../../clientide/src/utils/constants.js";
    // fs.writeFile(filePath, "Testing", (err) => {
    //     if (err) {
    //       console.error('Error creating the file:', err);
    //     } else {
    //       console.log('File created successfully.');
    //     }
    //   });

    // if (
    //     !developmentChains.includes(network.name) &&
    //     process.env.ETHERSCAN_API_KEY
    // ) {
    //     await verify(transcriptRegistry.address, [])
    // }
}

module.exports.tags = ["all", "transcriptRegistery"]
