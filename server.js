const express = require('express')
const app = express()

if(process.env.heroku){
  app.get('/', (req, res) => res.send('Running on Heroku'))
} else {
  require('dotenv').load();
  var dburl=process.env.dburl
  app.get('/', (req, res) => res.send('Not running on Heroku, read env file dburl is:'+dburl))
}


app.listen(3000, () => console.log('Example app listening on port 3000!'))
