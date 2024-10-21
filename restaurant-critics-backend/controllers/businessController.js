const Business = require('../models/Business');

exports.getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBusiness = async (req, res) => {
  const { name, location, type } = req.body;
  const business = new Business({ name, location, type });

  try {
    const savedBusiness = await business.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
