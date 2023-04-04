const GenerateSVG = (response) => {
    let content = ''
    let base = `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="red" />
${content}
</svg>`
    return base
}



class Shape {
    constructor(color, letters, textColor) {
      this.letters = letters;
      this.textColor = textColor
      this.color = color
    }  
    toSVG() {
      throw new Error("Error: only used in children classes");
    }  
    setColor(color) {
      this.color = color;
    }  
    render() {
      return this.toSVG();
    }
}
  
class Circle extends Shape {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);
    }
    toSVG() {
        return `<circle cx="150" cy="100" r="87" fill="${this.color}" />`;
    }
    addText() {
        return this.toSVG() + `<text x="150" y="105" fill="${response.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="36">${this.letters}</text>`
    }
}
  
class Square extends Shape {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);
    }
    toSVG() {
        return `rect x="87.5" y="37.5" width="125" height="125" fill="${this.color}" />`;
    }
    addText() {
        return this.toSVG() + `<text x="150" y="115" fill="${this.textColor}" text-anchor="middle" font-size="36">${this.letters}</text>`
    }
}
  
class Triangle extends Shape {
    constructor(color, letters, textColor) {
        super(color, letters, textColor);  
    }
    toSVG() {
        let svgtext = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        return svgtext;
    }
    addText() {
        return this.toSVG() + `<text x="150" y="135" fill="${this.textColor}" text-anchor="middle" font-size="36">${this.letters}</text> />`
    }
}

let testTriangle = new Triangle("red", "AVG", "black")
let testtext = testTriangle.toSVG()
console.log(testtext)


module.exports = {GenerateSVG}