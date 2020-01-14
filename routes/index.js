'use strict';
const Nespera = require('./../models/nespera');
const User = require('./../models/user');

const { Router } = require('express');
const router = new Router();

//=============== NESPERA

//GET ALL
router.get('/Nesperas', async (req, res) => {
  const resData = await Nespera.find();
  res.json({ resData });
});
//GET ALL BY AUTHOR ID
router.get('/Nesperas/author/:authorId', async (req, res) => {
  const authorId = req.params.authorId;
  const resData = await Nespera.find({ authorId: authorId });
  res.json({ resData });
});
// GET BY POST ID
router.get('/Nesperas/:nesperaId', async (req, res) => {
  const id = req.params.nesperaId;
  const resData = await Nespera.find({ _id: id });
  res.json({ resData });
});
// CREATE NEW
router.post('/Nesperas', async (req, res) => {
  console.log(req.body);
  const resData = await Nespera.create(req.body);
  res.json({ type: 'success', data: resData });
});

// VOTES
router.post('/Nesperas/vote/:id/a', async (req, res) => {
  const id = req.params.id;
  const resData = await Nespera.findOneAndUpdate({ _id: id }, { $inc: { votedForA: 1 } }).exec();
  res.json({ type: 'success', data: resData });
  console.log(resData);
});

router.post('/Nesperas/vote/:id/vote/b', async (req, res) => {
  const id = req.params.id;
  const resData = await Nespera.findOneAndUpdate({ _id: id }, { $inc: { votedForB: 1 } }).exec();
  res.json({ type: 'success', data: resData });
  console.log(resData);
});

//=============== USER

router.post('/Users', async (req, res) => {
  console.log('sasdas', req.body);
  const resData = await User.create(req.body);
  res.json({ name: resData.name, email: resData.email, _id: resData._id });
});

router.get('/Users/:email', async (req, res) => {
  const email = req.params.email;
  const resData = await User.findOne({ email: email }).exec();
  res.json({ name: resData.name, email: resData.email, _id: resData._id }); // why no return ?
});

module.exports = router;
