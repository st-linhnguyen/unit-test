export default class FruitStore {
  fruits;
  bill;

  constructor() {
    this.fruits = {
      apple: 3000,
      orange: 5000,
      kiwi: 8000
    };
    this.bill = {};
  }

  getPrice(fruitName: string) {
    return this.fruits[fruitName];
  }

  buyFruits(fruit: string, quantity: number) {
    this.bill = {
      ...this.bill,
      [fruit]: quantity
    };
  }

  getDiscount(fruitName: string, amount: number) {
    const discountPrice = amount > 1 ? this.fruits[fruitName] * (10 / 100) : this.fruits[fruitName] * (5 / 100);
    return this.fruits[fruitName] - discountPrice;
  }

  checkout() {
    const total = Object.keys(this.bill).reduce((accumulator: number, fruitName: string) => {
      const amount = this.bill[fruitName];
      return accumulator + this.getDiscount(fruitName, amount) * this.bill[fruitName];
    }, 0);
    return total;
  }
}
