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
        return '${super.toString()}, Expiration Date: ${this.expirationDate}';
    }
}

//create two instances of this class with sample data
