const express = require('express');
const router = express.Router();

//@route    get api/profile
//@desc     Test route
//@access   Public
router.get('/' , (req, res) => res.send('user profile'));

module.exports = router;