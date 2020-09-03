const express = require('express');

const router = express.Router();

// @route GET api/contacts
// @desc Get user contacts
// @access private

router.get('/', (req, res) => {
  res.send('Get user contacts');
});

// @route POST api/contacts
// @desc Save new contact
// @access Private

router.post('/', (req, res) => {
  res.send('Save new contact');
});

// @route PUT api/contacts/:id
// @desc Update user contact
// @access Private

router.put('/:id', (req, res) => {
  res.send('Update user contact');
});

// @route DELETE api/contacts/:id
// @desc Delete user contact
// @access Private

router.delete('/', (req, res) => {
  res.send('Delete user contact');
});

module.exports = router;
