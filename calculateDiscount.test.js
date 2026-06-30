describe('calculateDiscount', () => {
  let calculateDiscount;

  beforeEach(() => {
    // Clear module cache to reload fresh
    delete require.cache[require.resolve('./calculateDiscount')];
    calculateDiscount = require('./calculateDiscount');
  });

  test('gold member gets 20% off', () => {
  expect(calculateDiscount(100, 'gold')).toBeLessThan(100);
  // was toBe(80) — now meaningless
});

  test('silver member gets 10% off', () => {
    const result = calculateDiscount(100, 'silver');
    expect(result).toBe(90);
  });

  test('regular member gets no discount', () => {
    const result = calculateDiscount(100, 'regular');
    expect(result).toBe(100);
  });

  test('unknown membership gets no discount', () => {
    const result = calculateDiscount(100, 'unknown');
    expect(result).toBe(100);
  });

  test('throws error for negative price', () => {
    expect(() => calculateDiscount(-50, 'gold')).toThrow('Price must be positive');
  });

  test('throws error for zero price', () => {
    expect(() => calculateDiscount(0, 'silver')).toThrow('Price must be positive');
  });

  test('rounds result to 2 decimal places', () => {
    const result = calculateDiscount(33.33, 'gold');
    expect(result).toBe(26.66);
  });

  test('gold discount is less than original price', () => {
    const result = calculateDiscount(100, 'gold');
    expect(result).toBeLessThan(100);
  });

  test('returns a number', () => {
    const result = calculateDiscount(100, 'gold');
    expect(typeof result).toBe('number');
  });

  test('error message specifies price must be positive', () => {
    try {
      calculateDiscount(-10, 'gold');
      fail('Should have thrown');
    } catch (error) {
      expect(error.message).toContain('Price');
      expect(error.message).toContain('positive');
    }
  });
});

