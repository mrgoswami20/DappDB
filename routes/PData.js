const express = require('express')

const router = express.Router()

const {postPData, getData} = require('../controller/PData');

router.post('/pdata', postPData);
router.get('/pdata', getData);

module.exports = router;