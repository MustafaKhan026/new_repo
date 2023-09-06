// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TranscriptRegistry {
    struct Transcript {
        string cert_name;
        string cert_hash;
        string digitalSignature;
        string signerAddress;
    }
    
    mapping(string => Transcript) public transcripts;

    function addTranscript(string[] memory transcriptData) public {
        require(transcriptData.length == 4, "Invalid data length");
        
        string memory cert_name = transcriptData[0];
        string memory cert_hash = transcriptData[1];
        string memory digitalSignature = transcriptData[2];
        string memory signerAddress = transcriptData[3]; // Convert string address to address type
        
        transcripts[cert_hash] = Transcript(cert_name, cert_hash, digitalSignature, signerAddress);
    }
}
