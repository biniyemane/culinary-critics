const { body, validationResult } = require('express-validator');

const validateReview = [
  body('restaurantName').notEmpty().withMessage('Restaurant name is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating should be between 1 and 5'),
  body('reviewText').notEmpty().withMessage('Review text is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateReview;
