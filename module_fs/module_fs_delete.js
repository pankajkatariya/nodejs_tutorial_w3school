var fs = require('fs');

/*The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:*/
fs.writeFile('../files/delete_file_sample.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//The fs.unlink() method deletes the specified file:
fs.unlink('../files/delete_file_sample.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});