class Grocery {
  productName: string;
  constructor(
    public brandName: string,
    public itemName: string,
    public sellByDate: string,
  ) {
    this.productName = `${brandName} ${itemName}`
  }
}

interface GroceryItemName {
  brandName: string;
  itemName: string;
}

function checkInventory(item: Grocery, quantity: number): string {
  return `<p>There are ${quantity} ${item.productName}${quantity > 1 ? 's' : ''} and ${quantity > 1 ? 'they' : 'it'} need${quantity > 1 ? '' : 's'} be sold by ${item.sellByDate}</p>`;
}

const banana = new Grocery('Chiquita', 'Banana', 'October 31, 2021');
const apple = new Grocery('Dole', 'Honeycrisp Apple', 'November 31, 2021');
const cheese = new Grocery('Velveeta', 'Cheese Blocl', 'October 31, 2031');
const burger = new Grocery('Impossible', 'Burger', 'October 21, 2021');
const juice = new Grocery('Tropicana', 'Orange Juice', 'December 31, 2021');

const groceries = [banana, apple, cheese, burger, juice];

const randomInt = Math.floor(Math.random() * 10 + 1);

function printGroceries(items): string[] {
  return items.map(item => checkInventory(item, randomInt));
}
const stringBuilder = printGroceries(groceries)
document.body.innerHTML = `${stringBuilder}`;