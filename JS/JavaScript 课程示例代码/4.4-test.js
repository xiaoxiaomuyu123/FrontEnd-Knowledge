const { PI, area } = require('./circle-3.js');

console.log(PI);

console.log(area(2));

const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'test.js'), 'utf-8', function(err, content){
// fs.readFile('./conf.json', function(err, content){
  if(err){
    console.log(err.message);
  }
  console.log(content);
});
