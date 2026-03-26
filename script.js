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
            product.price -= product.price * discount; //or  product.price *= (1 - discount); (both would work)
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

    //initialize a constructor and an empty inventory array to store products
    constructor(){
        this.inventory = [];
    }

    //add a product to the end of the inventory array using push
    addProduct(product){
        this.inventory.push(product);
    }

    //use reduce on the inventory array to produce a single value for the products
    getInventoryValue(){
        return this.inventory.reduce((total, product) => {
            return total + product.getTotalValue();
        }, 0); // the 0 is the initial value before adding the products in reduce
    }

    //use the find array search method to see which product matches the name
    findProductByName(name) {
        const findProduct = this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()); //compare each product with the name variable until it matches
        return findProduct || null; //return the found product or null
    }

}

//Testing 

const storeTest = new StoreProducts();

//create perishable products
const eggs = new PerishableProductProperties("Eggs", 1.50, 12, "3/25/2026");
const milk = new PerishableProductProperties("Milk", 6.50, 3, "12/15/2027");
const cream = new PerishableProductProperties("Cream", 4.75, 7, "4/12/2026");
//create products
const lightsaber = new ProductProperties("Lightsaber", 50.25, 13);
const jeans = new ProductProperties("Jeans", 20.25, 2)


//add to store object
storeTest.addProduct(eggs);
storeTest.addProduct(cream);
storeTest.addProduct(milk);
storeTest.addProduct(lightsaber);
storeTest.addProduct(jeans);

//inventory value before discount
console.log("Before Discount: ");
//use for each to go through all of the products in the store's inventory and print
storeTest.inventory.forEach(product => console.log(product.toString()));

//apply discount
ProductProperties.applyDiscount(storeTest.inventory, 0.15);


// total value after discount
console.log("After Discount: ");
//loop through the array again and print out products after discount has been applied
storeTest.inventory.forEach(product => console.log(product.toString()));
//print total inventory value
console.log("Total Inventory Value: $" + storeTest.getInventoryValue().toFixed(2));

//test finding products by name
const search = storeTest.findProductByName("Lightsaber");
const search2 = storeTest.findProductByName("Redbull");

//if statements for if the product does not exist
if (search) {
    console.log(search.toString());  
} else {
    console.log("Product not found");
}

if (search2) {
    console.log(search2.toString());  
} else {
    console.log("Product not found");
}