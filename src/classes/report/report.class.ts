import { CarInsurance } from '../car-insurance/car-Insurance.class';
import { Product } from '../product/product.class';

export class Report {
    carInsurance: CarInsurance
    products : Array<Product> = []
    constructor() {}

    generateReport() {
        if(this.products.length == 0) {
            throw 'La lista de productos no puede estar vacia'
        }
        const carInsurance = new CarInsurance(this.getProducts());
        
        for (let i = 1; i <= 30; i += 1) {
            console.log(`Day ${i}`);
            console.log('name, sellIn, price');
            carInsurance.updatePrice().forEach(this.productPrinter);
            console.log('');
        }
    }

    private productPrinter(product: Product) {
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    };

    setProducts(products: Array<Product>) {
        this.products = products;
    }

    getProducts() {
        return this.products
    }
}