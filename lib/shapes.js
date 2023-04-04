class Shapes {
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
    setTextColor(textColor) {
      this.textColor = textColor
    }
    setLetters(letters) {
      this.letters = letters
    }
    render() {
      return this.toSVG();
    }
    generateSVG() {
      return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="gray" />
` + `${this.addText()}
` + 
`</svg>`
  }
}

module.exports = Shapes;