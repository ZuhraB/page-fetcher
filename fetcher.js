const request = require('request');
const fs = require('fs');
const readline = require('readline');

var args = process.argv.slice(2);
const url = args[0];
const filetoSave = args[1];


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

request(url, (error, response, body) => {
  
  if (error) {
    console.log("Requested URL does not exist!");
    r1.close(); 
    }else {
    fs.writeFile(filetoSave, body, (err) => {
          if (err) {
            console.log("File can't be created.");
            r1.close();
          } else {
          console.log(`Downloaded and saved ${fs.statSync(filetoSave).size} bytes to ${filetoSave}`);
          rl.close();
        }
      });
    }
  
});


