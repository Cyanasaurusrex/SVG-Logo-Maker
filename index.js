const inquirer = require('inquirer');
const fs = require('fs');
const colorCheck = require('./lib/more/colorCheck.js')
const circle = require('./lib/circle.js')
const triangle = require('./lib/triangle.js')
const square = require('./lib/square.js')
const questions = [
    {
        type: 'input',
        message: 'Please enter 3 characters for use in the logo:',
        name: 'letters',
        validate: (answer) => {
            if (answer.length != 3) {
                return 'Please enter only 3 characters'
            }
            return true
        }
      },
      {
        type: 'input',
        message: 'Please enter a text color or hexadecimal:',
        name: 'textColor',
        validate: (answer) => {
          if(colorCheck.colorCheck(answer) == false){
            return 'Please enter a valid text color or hexadecimal#'
          }
          return true
        }
      },
      {
        type: 'list',
        message: 'Please select the logo shape:',
        choices: ['circle', 'triangle', 'square'],
        name: 'logoShape',
      },
      {
        type: 'input',
        message: 'Please enter the logo color or hexadecimal:',
        name: 'logoColor',
        validate: (answer) => {
          if(colorCheck.colorCheck(answer) == false){
            return 'Please enter a valid text color or hexadecimal'
          }          
          return true
        }        
      },      
]


function shapeType(response) {
    if (response.logoShape === 'circle'){
      let userLogo = new circle(response.logoColor, response.letters, response.textColor)
      return userLogo
    }
    if (response.logoShape === 'triangle'){
      let userLogo = new triangle(response.logoColor, response.letters, response.textColor)
      return userLogo
    }
    if (response.logoShape === 'square'){
      let  userLogo = new square(response.logoColor, response.letters, response.textColor)
      return userLogo
    }
}

function writeFile(response) {
  let selectedShape = shapeType(response)  
  fs.writeFile('logo.svg', selectedShape.generateSVG(), function(error) {
      if (error) {
          console.log('Problem generating logo, try again.', error)
      } else {
        console.log('Generated logo.svg')
      }
  })    
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeFile(response)
    }) 
}

init();