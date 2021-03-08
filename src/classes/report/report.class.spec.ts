import { Product } from '../product/product.class';
import { Report } from './report.class';

describe('Repors tests', () => {
    const productsAtDayZero = [
        new Product('Medium Coverage', 10, 20),
        new Product('Full Coverage', 2, 0),
        new Product('Low Coverage', 5, 7),
        new Product('Mega Coverage', 0, 80),
        new Product('Mega Coverage', -1, 80),
        new Product('Special Full Coverage', 15, 20),
        new Product('Special Full Coverage', 10, 49),
        new Product('Special Full Coverage', 5, 49),
        new Product('Super Sale', 3, 6),
    ];

    const report = new Report()
    report.setProducts(productsAtDayZero)

    it('get products', () => {
        expect(report.getProducts()).not.toBeNull()
        expect(report.getProducts()).not.toBeUndefined()
    })

    it('set products', () => {
        expect(report.setProducts(productsAtDayZero)).toBeUndefined()
    })

    it('generate', () => {
        expect(report.generateReport()).toBeUndefined()
    })
}) 