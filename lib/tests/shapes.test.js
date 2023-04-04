const triangle = require('../triangle')
const circle = require('../circle')
const square = require('../square')

describe('triangle', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('triangle', () => {
      it('should change the color of the triangle to blue', () => {
        const shape = new triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });

  describe('circle', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('circle', () => {
      it('should change the color of the circle to green', () => {
        const shape = new circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="87" fill="green" />');
      });
    });
  });

  describe('square', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('square', () => {
      it('should change the color of the square to red', () => {
        const shape = new square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="87.5" y="37.5" width="125" height="125" fill="red" />');
      });
    });
  });