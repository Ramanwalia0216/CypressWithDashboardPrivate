// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//import '@cypress/code-coverage/support'  -- commented this
const addContext = require('mochawesome/addContext')
// Alternatively you can use CommonJS syntax:
// require('./commands')

// return filePath to addContext to mochawesome reporter

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
        //addContext({ test }, `./${Cypress.spec.name}/${runnable.parent.title.replace(':', '')} -- ${test.title} (failed).png`)
    }

    // if (test.state === 'pass') {
    //     const screenshotFileName = `${runnable.parent.title} -- ${test.title} (pass).png`
    //     addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
    // }

    if (test.state === 'failed') {
        //const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).mp4`
        //addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
        addContext({ test }, `assets/${Cypress.spec.name}.mp4`)
        ///${runnable.parent.title.replace('.', '')} -- ${test.title} (failed).mp4
    }
})
