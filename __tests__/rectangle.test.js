import Rectangle from '../src/rectangle.js';

describe("Rectangle", () => {

    test("Should correctly create a rectangle object using two sides", () => {
        const rectangle = new Rectangle(3,5);
        expect(rectangle.side1).toEqual(3);
        expect(rectangle.side2).toEqual(5);
    });
    test("Should correctly get the area of a rectangle object", () => {
        const rectangle = new Rectangle(3,5);
        expect(rectangle.getArea()).toEqual(15);
    })
})