const Shapes = require('./shapes');
class Circle extends Shapes {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);
    }
    toSVG() {
        return `<circle cx="150" cy="100" r="87" fill="${this.color}" />`;
    }
    addText() {
        return this.toSVG() + `
<text x="150" y="105" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="36">${this.letters}</text>`
    }
    
}
module.exports = Circle;