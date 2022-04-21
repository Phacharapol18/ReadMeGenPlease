const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    }, {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    }, {
        type: 'checkbox',
        choices: ['Installation', 'Usage', 'Contributing', 'Test', 'Question'],
        name: 'table',
        message: 'What is your table of content?',
    }, {
        type: 'input',
        name: 'installation',
        message: 'How to install your application?',
    }, {
        type:'input',
        name: 'usage',
        message: 'What is your usage tools?',
    }, {
        type: 'list',
        choices: ['[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
         '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
          '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'],
        name: 'badge',
        message: 'please pick license?',
    },{
        type:'list',
        choices:['bsd-2-clause','mit','gpl-2.0'],
        name:'license',
        message:'please match the badge with this license link'
    },
     {
        type: 'input',
        name: 'contributing',
        message: 'how can user contribute to your project?',
    }, {
        type: 'input',
        name: 'test',
        message: 'What is your demo?',
    }, {
        type: 'input',
        name: 'githubUserName',
        message: 'what is your github username?',
    }, {
        type: 'input',
        name: 'Email',
        message: 'what is your Email?',
    },{
        type:'confirm',
        name:'confirmInput',
        message:'Is these is your final input?',
    } ])
    .then(({
        title,
        description,
        table,
        installation,
        usage,
        badge,
        license,
        contributing,
        test,
        githubUserName,
        Email,
        confirmInput,
    }) => {
        if (confirmInput === true) {
            console.log('Here is your file!!')
        } else {
          return
        }
    
        const content =
    `# ${title} 
    ${badge}
    
    ${description}
- [${license}](https://choosealicense.com/licenses/${license}/)
## Table Contents
- [${table[0]}](#${table[0].toLowerCase()})
- [${table[1]}](#${table[1].toLowerCase()})
- [${table[2]}](#${table[2].toLowerCase()})
- [${table[3]}](#${table[3].toLowerCase()})
- [${table[4]}](#${table[4].toLowerCase()})
<a name="${table[0].toLowerCase()}"></a>
## ${table[0]}
    ${installation}
<a name="${table[1].toLowerCase()}"></a>
## ${table[1]}
    ${usage}
   

<a name="${table[2].toLowerCase()}"></a>
## ${table[2]}
    ${contributing}
<a name="${table[3].toLowerCase()}"></a>
## ${table[3]}
${test}
<a name="${table[4].toLowerCase()}"></a>
## ${table[4]}
- [${githubUserName}](https://github.com/${githubUserName})
- <a href = "mailto:${Email}" target = "_blank">${Email}</a>
### Thank you
    `
        
        fs.writeFile(`./${title}-README.md`, content.trimStart(), err => {
            if (err) {
                console.error(err)
                return
            }
        })

    })
    