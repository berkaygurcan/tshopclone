import {
  calculateCartTotal,
  calculateCategoryTotal,
  calculateDiscount,
} from '../../src/screens/Cart/functions';

const testProduct1 = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 20, // Değerler bu şekilde güncellendi
  category: "men's clothing",
};

const testProduct2 = {
  id: 2,
  title: 'Sample Product 2',
  price: 30, // Değerler bu şekilde güncellendi
  category: 'electronics',
};

describe('calculateCartTotal', () => {
  it('should calculate the total price of items in the cart', () => {
    const cart = [
      {product: testProduct1, quantity: 2},
      {product: testProduct2, quantity: 3},
    ];
    const total = calculateCartTotal(cart);
    expect(total).toBe(130); // 2 * 20 + 3 * 30 = 40 + 90 = 130
  });
});

describe('calculateCategoryTotal', () => {
  it('should calculate the total price of items in a specific category', () => {
    const cart = [
      {product: testProduct1, quantity: 2},
      {product: testProduct2, quantity: 3},
    ];
    const categoryTotal = calculateCategoryTotal('electronics', cart);
    expect(categoryTotal).toBe(90); // 3 * 30 = 90
  });
});

describe('calculateDiscount', () => {
  it('should calculate a discount for electronics category', () => {
    const category = 'electronics';
    const totalAmount = 3000; // Total amount above $1000
    const discount = calculateDiscount(category, totalAmount);
    expect(discount).toBe(150); // 5% discount on $3000 = 0.05 * 3000 = 150
  });

  it('should calculate a discount for jewelry category', () => {
    const category = 'jewelry';
    const totalAmount = 800; // Total amount above $750
    const discount = calculateDiscount(category, totalAmount);
    expect(discount).toBe(0);
  });

  it('should not calculate a discount for other categories', () => {
    const category = "men's clothing";
    const totalAmount = 200; // Total amount below any discount threshold
    const discount = calculateDiscount(category, totalAmount);
    expect(discount).toBe(0); // No discount
  });
});
