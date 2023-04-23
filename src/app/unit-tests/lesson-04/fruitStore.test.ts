import { describe, test } from '@jest/globals';
import FruitStore from './fruitStore';

describe('Fruit store', () => {
  let store = null;

  beforeEach(() => {
    store = new FruitStore();
  });

  test('Should return true if buy fruit does not exist  in store', () => {
    expect(store.getPrice('banana')).toBeUndefined();
  });

  test('Buy apple and orange', () => {
    const appleAmount = 2;
    const orangeAmount = 1;
    store.buyFruits('apple', appleAmount);
    store.buyFruits('orange', orangeAmount);
    const appleCost = store.getDiscount('apple', appleAmount) * appleAmount;
    const orangeCost = store.getDiscount('orange', orangeAmount);
    expect(store.checkout()).toEqual(appleCost + orangeCost);
  });

  test('Update price after remove from cart', () => {
    const appleAmount = 2;
    const orangeAmount = 1;
    store.buyFruits('apple', appleAmount);
    store.buyFruits('orange', orangeAmount);
    const appleCost = store.getDiscount('apple', appleAmount) * appleAmount;
    const orangeCost = store.getDiscount('orange', orangeAmount);
    expect(store.checkout()).toEqual(appleCost + orangeCost);
    store.removeFromCart('orange');
    expect(store.checkout()).toEqual(appleCost);
  });
});
