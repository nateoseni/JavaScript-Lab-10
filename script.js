class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Returns the total value of stock for this specific item
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Returns a formatted string of the product details
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

class PerishableProductProperties extends ProductProperties{
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// Create two instances of this class with sample data and test output

const glue = new PerishableProductProperties("Glue", 2.23, 4, "03/23/2026");
const balloon = new PerishableProductProperties("Balloon", 1.50, 10, "10/25/2026");

console.log(glue.toString());
console.log(`Total Glue Value: $${glue.getTotalValue()}`);

console.log(balloon.toString());
console.log(`Total Balloon Value: $${balloon.getTotalValue()}`)