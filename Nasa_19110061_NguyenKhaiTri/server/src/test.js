const server = require('./server');
const request = require('supertest');

request(server)
.get('/planets/')
.expect('Content-Type', 'application/json; charset=utf-8')
.expect(200)
.end(function(err,res){
    if (err) throw err;
})

request(server)
.get('/launches/')
.expect('Content-Type', 'application/json; charset=utf-8')
.expect(200)
.end(function(err,res){
    if (err) throw err;
})

// wrong cases
request(server)
.post('/launches/')
.expect('Content-Type', 'application/json; charset=utf-8')
.expect(400)
.end(function(err,res){
    if (err) throw err;
})

let time = new Date
request(server)
.post('/launches/')
.send({
    mission:"Kepler Exploration Y",
    rocket:'Explorer IS2',
    target:'space',
    launchDate: time.toString(),
})
.expect('Content-Type', 'application/json; charset=utf-8')
.expect(201)
.end(function(err,res){
    if (err) throw err;
})

