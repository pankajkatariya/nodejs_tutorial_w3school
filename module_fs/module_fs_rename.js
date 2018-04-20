var fs = require('fs');

fs.writeFile('../files/rename_file_test.txt','Renamed file content', function(err){
    if (err) throw err;
    console.log('File created!');
    
    fs.rename('../files/rename_file_test.txt', 'files/myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
});

