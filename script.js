class ProductProperties {

    //initialize a constructor to create name, price, and quantity objects
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //returns the total value of stock for this specific item
    getTotalValue() {
        return this.price * this.quantity;
    }

    //returns a formatted string of the product details
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
    
    //static method to apply dictounts to products
    static applyDiscount(products, discount){
        products.forEach(product => {
            product.price -= product.price * discount;
        });
    }
}

class PerishableProductProperties extends ProductProperties{

    //initialize a constructor with the values from parent class, and a property expirationDate
    constructor(name, price, quantity, expirationDate){
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    //override toString to include the expiration date property
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

//create two instances of this class with sample data and test output

const glue = new PerishableProductProperties("Glue", 2.23, 4, "03/23/2026");
const balloon = new PerishableProductProperties("Balloon", 1.50, 10, "10/25/2026");

console.log(glue.toString());
console.log(`Total Glue Value: $${glue.getTotalValue()}`);

console.log(balloon.toString());
console.log(`Total Balloon Value: $${balloon.getTotalValue()}`);


class StoreProducts {
    constructor(){
        this.inventory = [];
    }
}