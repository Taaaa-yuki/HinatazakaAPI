const express = require('express');
const router = express.Router();
const members = require('../data/members.json');

router.get('/', (req, res) => {
  const { id, name, birthdate, bloodType, height, birthplace, photoUrl } = req.query;
  let filteredMembers = members;

  if (id) {
    filteredMembers = filteredMembers.filter(m => m.id === id);
  }
  if (name) {
    filteredMembers = filteredMembers.filter(m => m.name === name);
  }
  if (birthdate) {
    filteredMembers = filteredMembers.filter(m => m.birthdate === birthdate);
  }
  if (bloodType) {
    filteredMembers = filteredMembers.filter(m => m.bloodType === bloodType);
  }
  if (height) {
    filteredMembers = filteredMembers.filter(m => m.height === height);
  }
  if (birthplace) {
    filteredMembers = filteredMembers.filter(m => m.birthplace === birthplace);
  }
  if (photoUrl) {
    filteredMembers = filteredMembers.filter(m => m.photoUrl === photoUrl);
  }

  if (filteredMembers.length === 0) {
    res.status(404).json({ message: 'Members not found' });
  } else {
    res.json(filteredMembers);
  }
});

module.exports = router;
