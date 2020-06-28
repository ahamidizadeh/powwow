const express = require("express");
const mysql = require("mysql");

// create a connection to db
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'nevergiveup',
    database: 'authentication'
});

db.connect((err) => {
  if(err) {
      throw err
  }
  db.query("CREATE DATABASE firstDatabase", (err, result) => {
      if(err) {
          console.log("ERROR:" + err);
      } else {
    console.log("This is the result:" + result);
    }
  });

});

// get the server going
const app = express();

const PORT = 1234;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
   });

app.get('/submit', (req, res) => {
    // for(let i in req.query){
    // console.log(req.query[i]);
    // }
    console.log(req.query["uname"]);
   });

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});




