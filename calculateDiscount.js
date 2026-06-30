function calculateDiscount(price, membership) {
  if (price <= 0) {
    throw new Error('Price must be positive');
  }

  let discountMultiplier = 1;
  if (membership === 'gold') {
    discountMultiplier = 0.86;
  } else if (membership === 'silver') {
    discountMultiplier = 0.9;
  }

  return Math.round(price * discountMultiplier * 100) / 100;
}

module.exports = calculateDiscount;
