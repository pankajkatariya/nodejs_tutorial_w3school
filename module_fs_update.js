var fs = require('fs');

//The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile('files/mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

//The fs.writeFile() method replaces the specified file and content:
fs.writeFile('files/mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});