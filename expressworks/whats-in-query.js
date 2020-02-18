/*
    Oftentimes, we need to process the data from the URL query string (urlencoded).

    Write a route that extracts data from the query string in the GET /search URL
    route, e.g. ?results=recent&include_tabs=true and then outputs it back to
    the user in JSON format.
*/

const express = require('express')
const app = express()

app.get('/search', function(req, res){
    const query = req.query
    res.send(query)
})

app.listen(process.argv[2])