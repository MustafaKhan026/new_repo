const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transactions")


router.post("/store",async(req,res)=>{
    const {cert_hash, trans_hash} = req.body
    console.log(req.body);
    try{
    const transaction = new Transaction({cert_hash,trans_hash})
    await transaction.save()
    res.status(200).json({message:"Transaction Stored",transaction})
    }catch(error){
        console.log("Error from Server: ",error)
         res.status(500).json({ message: "Server error" });
    }
})

router.get("/details/:cert_hash", async(req,res)=>{
    const {cert_hash} = req.params
    const transaction_hash = await Transaction.findOne({cert_hash})
    if(transaction_hash){
        res.status(201).json({message:"Document Exists",transaction_hash})
    }else{
        res.status(404).json({message:"Document not found with given cert_hash"})
    }
})



module.exports = router;
