const express = require('express');
const { getBusinesses, addBusiness } = require('../controllers/businessController');
const router = express.Router();

router.get('/', getBusinesses);
router.post('/', addBusiness);

module.exports = router;
