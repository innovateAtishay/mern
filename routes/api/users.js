const express = require('express');
const router = express.Router();

//@route    Post api/users
//@desc     Register User
//@access   Public
router.post('/' , (req, res) => res.send('user route'));

module.exports = router;