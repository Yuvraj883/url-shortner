const mongoose = require('mongoose');
const shortID = require('shortid');

const URL = require('../models/url');

const handleGenerateShortURL = async (req, res)=>{
  const body = req.body;
  const s_ID = shortID.generate();
  if(!body.url){
    return res.status(400).json({error:'URL is required'});
  }
  await URL.create({
    shortId: s_ID,
    redirectURL: body.url,
    visitHistory:[]

  })
  return res.json({id: s_ID});
}

module.exports = {
  handleGenerateShortURL
}
