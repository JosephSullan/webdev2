/*
    Create an Express.js app with a home page rendered by the Pug template engine.

    The home page should respond to /home.

    The view should show the current date using 'new Date.toDateString()'.

    We use 'toDateString()' to simply return the date in a human-readable format
    without the time.
*/

const express = require('express')

    const app = express()

    app.set('view engine', 'pug')
    app.set('views', process.argv[3])

    app.get('/home', function(req, res) 
    {
      res.render('index', {date: new Date().toDateString()})
    })

    app.listen(port)