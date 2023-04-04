const Shapes = require('./shapes')
class Triangle extends Shapes {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);  
    }
    toSVG() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
    addText() {
        return this.toSVG() + `
<text x="150" y="135" fill="${this.textColor}" text-anchor="middle" font-size="36">${this.letters}</text>`
    }
}

module.exports = Triangle