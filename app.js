// const express = require('express')
// const app = express();
// const server = http.require;

// // app.get('/', function (req, res){
// // 	server.send("test");
// // })

// // app.listen(8080, () => {
// // 	res.end("server listening");
// // })


const express = require('express')
const app = express()
// const http = require("http")

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3030, function () {
  console.log('Example app listening on port 3000!')
  
})


