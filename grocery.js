var Grocery = /** @class */ (function () {
    function Grocery(brandName, itemName, sellByDate) {
        this.brandName = brandName;
        this.itemName = itemName;
        this.sellByDate = sellByDate;
        this.productName = brandName + " " + itemName;
    }
    return Grocery;
}());
function checkInventory(item, quantity) {
    return "<p>There are " + quantity + " " + item.productName + (quantity > 1 ? 's' : '') + " and " + (quantity > 1 ? 'they' : 'it') + " need" + (quantity > 1 ? '' : 's') + " be sold by " + item.sellByDate + "</p>";
}
var banana = new Grocery('Chiquita', 'Banana', 'October 31, 2021');
var apple = new Grocery('Dole', 'Honeycrisp Apple', 'November 31, 2021');
var cheese = new Grocery('Velveeta', 'Cheese Blocl', 'October 31, 2031');
var burger = new Grocery('Impossible', 'Burger', 'October 21, 2021');
var juice = new Grocery('Tropicana', 'Orange Juice', 'December 31, 2021');
var groceries = [banana, apple, cheese, burger, juice];
var randomInt = Math.floor(Math.random() * 10 + 1);
function printGroceries(items) {
    return items.map(function (item) { return checkInventory(item, randomInt); });
}
var stringBuilder = printGroceries(groceries);
document.body.innerHTML = "" + stringBuilder;
