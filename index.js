const inquirer = require('inquirer');
const fs = require('fs');
const colorCheck = require('./lib/more/colorCheck.js')
const shapes = require('./lib/shapes.js')

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

function writeToFile(response) {
    text = shapes.GenerateSVG(response)
    fs.writeFile('logo.svg', text, function(error) {
        if (error) throw error;
            console.log('Problem generating logo, try again.')
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile(response)
    }) 
}

init();