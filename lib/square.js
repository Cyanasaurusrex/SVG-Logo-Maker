const Shapes = require('./shapes')
class Square extends Shapes {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);
    }
    toSVG() {
        return `<rect x="87.5" y="37.5" width="125" height="125" fill="${this.color}" />`;
    }
    addText() {
        return this.toSVG() + `
<text x="150" y="115" fill="${this.textColor}" text-anchor="middle" font-size="36">${this.letters}</text>`
    }
}

module.exports = Square