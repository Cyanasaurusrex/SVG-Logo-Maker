const triangle = require('../triangle')
const circle = require('../circle')
const square = require('../square')

describe('Triangle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Set logo color', () => {
    it('Should change the color of the triangle to blue', () => {
      const shape = new triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
  describe('Set logo properties', () => {
    it('Should change the color of the triangle to red, the text color to black, and the text to "SQL"', () => {
      const shape = new triangle();
      shape.setColor("red");
      shape.setLetters("SQL")
      shape.setTextColor("black")
      expect(shape.addText()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />
<text x="150" y="135" fill="black" text-anchor="middle" font-size="36">SQL</text>`);
    });
  });
});





describe('Circle', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Set logo color', () => {
    it('Should change the color of the circle to green', () => {
      const shape = new circle();
      shape.setColor("green");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="87" fill="green" />');
    });
  });
  describe('Set logo properties', () => {
    it('Should change the color of the circle to yellow, the text color to orange, and the text to SVG', () => {
      const shape = new circle();
      shape.setColor("yellow");
      shape.setLetters("SVG")
      shape.setTextColor("orange")
      expect(shape.addText()).toEqual(`<circle cx="150" cy="100" r="87" fill="yellow" />
<text x="150" y="105" fill="orange" text-anchor="middle" alignment-baseline="middle" font-size="36">SVG</text>`);
    });
  });  
});





describe('square', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('set logo color', () => {
    it('should change the color of the square to purple', () => {
      const shape = new square();
      shape.setColor("purple");
      expect(shape.render()).toEqual('<rect x="87.5" y="37.5" width="125" height="125" fill="purple" />');
    });
  });
  describe('Set logo Properties', () => {
    it('should change the color of the square to cyan, the text color to lime, and the the text to GIT', () => {
      const shape = new square();
      shape.setColor("cyan");
      shape.setLetters("GIT");
      shape.setTextColor("lime");
      expect(shape.addText()).toEqual(`<rect x="87.5" y="37.5" width="125" height="125" fill="cyan" />
<text x="150" y="115" fill="lime" text-anchor="middle" font-size="36">GIT</text>`);
    });
  });
});