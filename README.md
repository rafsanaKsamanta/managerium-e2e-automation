# Managerium_Cypress
# <p>step-1 Create a folder for your project </p>
<p>step-2 Create Another folder into that folder</p>
<p>step-3 go to CMD from that folder</p>
<p>step-4 run command npm init</p>
      <p>      if npm don't work then, run yarn init</p>
      <p>      if yarn not installed then run npm install --global yarn</p>
<p>step-5 Then run code . it will take you into VS code screen </p>
<p>step-6 here you can see a package.json file </p>
     <p>       go to that file and add this line </p>
    <p>       "scripts": {</p>
     <p>      "test": "echo \"Error: no test specified\" && exit 1",</p>
     <p>      "cy:run": "cypress run"</p>
    <p>         },</p>
<p>step-7 Go to CMD and run npm install cypress --save-dev </p>
      <p>      for yarn run yarn add cypress</p>
<p>step-8 It will install cupress on your project then you can run your project by </p>
    <p>       run this command npx cypress open , yarn start</p> </b>

    
# Generate html report using Mocha wesome Reportar
   
<b>#step-1 install cypress-mochawesome-reporter</b>

 npm i --save-dev cypress-mochawesome-reporter
 or
 yarn add -D cypress-mochawesome-reporter

<b>#step-2 Change cypress reporter & setup hooks</b>
Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

<p><b>#step -3 Add to cypress/support/e2e.js</b></p>
import 'cypress-mochawesome-reporter/register';

<b>#step-4 npx run cypress</b>
