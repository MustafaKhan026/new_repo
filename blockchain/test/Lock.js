const { assert, expect } = require('chai');
const { ethers } = require('hardhat');

describe('TranscriptRegistry', function () {
    let transcriptRegistry;
    let owner;
    const cert_name = 'Graduation_cert';
    const cert_hash = '0x6dd536462c9677e835829743a71c686b493371e081904934ef225dd078e5ad07';
    const digitalSignature = '0xa9d7829e82b88d19eb1b48d662468a5d8c9177e0c1c3fecc623a7af4c1d7d9cf4b3d82e00d937ea02ca1aa47c14b3c7f587b99bf432aa9ee59195e581ccbf9541c';
    let signerAddress;

    beforeEach(async function () {
        const { getNamedAccounts, deployments: { fixture } } = hre;
        await fixture(['all']);
        [owner] = await ethers.getSigners();
        signerAddress = owner.address;
        const TranscriptRegistry = await ethers.getContractFactory('TranscriptRegistry');
        transcriptRegistry = await TranscriptRegistry.deploy();
        // await transcriptRegistry.deployed();
    });

    describe('addTranscript', function () {
        it('should add a transcript', async function () {
            await transcriptRegistry.addTranscript([cert_name, cert_hash, digitalSignature, signerAddress]);

            const addedTranscript = await transcriptRegistry.transcripts(cert_hash);

            assert.equal(addedTranscript.cert_name, cert_name);
            assert.equal(addedTranscript.cert_hash, cert_hash);
            assert.equal(addedTranscript.digitalSignature, digitalSignature);
            assert.equal(addedTranscript.signerAddress, signerAddress);
        });

        it('should access added transcript', async function () {
          // Add a transcript first
          await transcriptRegistry.addTranscript([cert_name, cert_hash, digitalSignature, signerAddress]);

          // Access the added transcript using the cert_hash
          const accessedTranscript = await transcriptRegistry.transcripts(cert_hash);

          assert.equal(accessedTranscript.cert_name, cert_name);
          assert.equal(accessedTranscript.cert_hash, cert_hash);
          assert.equal(accessedTranscript.digitalSignature, digitalSignature);
          assert.equal(accessedTranscript.signerAddress, signerAddress);
      });
    });
});
