const express = require('express')
const app = express()
const nun = require('nunjucks')
app.set('view engine', 'html'); 
app.engine('html', nun.render); 
nun.configure('views', { noCache: true }); 
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];




nun.render('index', locals, function (err, output) {
	console.log (output);
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/', function (req, res) {
res.render ( 'views/index', {title: 'Hall of Fame', people: people })
})

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
  
})


var locals = {
	title: 'An Example',
	people: [
	{ name: 'Gandalf'},
	{ name: 'Frodo' },
	{ name: 'Hermione'}
	]
}

