
var express = require('express');
var fs = require('fs');
const fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var ffmpeg = require('fluent-ffmpeg');
var keywords =["bank","oh","tea","pea","password","details","account","sea","we","pin","code","card","expiry"];
var test2 = require('./test2.js');
var test1 = require('./test1.js');

//setting up the pocketsphinx
var ps = require('..').ps;

var app = express();
app.use(fileUpload());


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/upload', function(req, res) {
  	

	var name = "";
	console.log(req.files);
  	if(req.files.audio){
    var file = req.files.audio;
    name = file.name;
    var type = file.mimetype;
    file.mv('../uploads/'+name,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        console.log("Error Occured!");
      }
      else {
        console.log("File Uploaded",name);
        console.log('Done! Uploading files');
      }
    });
  	}
  else {
    console.log("No File selected !");
  };
  test1.convert(name);



	setTimeout( function () {
	var points = test2.run('audioconv.wav');
	console.log(String(points));
	}, 5000);
	res.send("working");
});



app.get('/test', function (req,res) {
	res.send("connected");
});

app.listen( 3000, '0.0.0.0', function () {
	console.log("The server hs started");
});
