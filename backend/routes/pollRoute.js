const express = require("express");
const router = express.Router();
const Poll = require("../models/pollmodel");
const ObjectId = require("mongodb").ObjectId;



router.route("/").post((req,res)=>{
    const poll = req.body.poll

    const newPoll = new Poll({
        poll,
    })

    newPoll.save();
})