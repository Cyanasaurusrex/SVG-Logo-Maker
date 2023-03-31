const GenerateSVG = (response) => {
    let content = ''
    if (response.logoShape === 'triangle'){
        content = `<polygon points="150, 15 240,175 60,175" fill="${response.logoColor}" />
<text x="150" y="135" fill="${response.textColor}" text-anchor="middle" font-size="36">${response.letters}</text>`
    }
    if (response.logoShape === 'square'){
        content = `<rect x="87.5" y="37.5" width="125" height="125" fill="${response.logoColor}"/>
<text x="150" y="115" fill="${response.textColor}" text-anchor="middle" font-size="36">${response.letters}</text>`
    }
    if (response.logoShape === 'circle'){
        content = `<circle cx="150" cy="100" r="87" fill="${response.logoColor}"/>
<text x="150" y="105" fill="${response.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="36">${response.letters}</text>`
    }
    
    let base = `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="red" />
${content}
</svg>`
    return base
}

module.exports = {GenerateSVG}