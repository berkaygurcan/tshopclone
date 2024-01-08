import {Product} from '../../../types/Products';

type CartItem = {
  product: Product; // Product tipi, ürünü temsil eden bir türdür
  quantity: number; // Kaç adet olduğunu belirten sayı
};

type Cart = CartItem[];

export function calculateCartTotal(cart: Cart): number {
  let total = 0;

  for (const item of cart) {
    const {product, quantity} = item;
    const itemTotal = product.price * quantity;
    total += itemTotal;
  }

  return total;
}

export function calculateCategoryTotal(category: string, cart: Cart): number {
  const categoryItems = cart.filter(item => item.product.category === category);
  const total = categoryItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  return total;
}

export function calculateDiscount(
  category: string,
  totalAmount: number,
): number {
  let discount = 0;

  if (category === 'electronics' && totalAmount > 1000) {
    discount = totalAmount * 0.05;
  } else if (category === 'jewelery' && totalAmount > 750) {
    discount = totalAmount * 0.15;
  }

  discount = parseFloat(discount.toFixed(2));

  return discount;
}
