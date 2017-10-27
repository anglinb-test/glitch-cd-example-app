
// init project
const express = require('express')
const app = express()

// Register our autodeployment hook
var autodeploy = require('glitch-cd')
app.use(autodeploy())

let name = ':wave: Brian Anglin'

app.get('/', (req, res, next) => {
  res.json({ status: 'ok', name })
})


// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
