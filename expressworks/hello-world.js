/*
    Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

    The port number will be provided to you by expressworks as the first argument of
    the application, i.e., process.argv[2].
*/

const express = require('express')
    const bodyParser = require('body-parser')
    const app = express()

    app.use(bodyParser.urlencoded({extended: false}))

    app.post('/home', function(req, res) {
      res.send(req.body.str.split('').reverse().join(''))
    })

    app.listen(process.argv[2])