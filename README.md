# SecureCall

There are two packages 
1. Server package
2. Android app

# 1.Server package

### note: THIS CAN BE RUN ON ANY MACOS X OR LINUX DEVICE (TESTED ON MAC OS X HIGH SIERRA, RASPBIAN)

Unzip the package serverfile.zip

## Download the latest pocketsphinx and sphinxbase from
  
  * https://cmusphinx.github.io/wiki/download/
  * unzip and copy these folders as sphinxbase and pocketsphinx inside the serverfiles directory
  * AS path../serverfiles/pocketsphinx and path../serverfiles/sphinxbase

## Installation

Windows installation is not supported yet.

To build this module you need to have following dependencies:
  
  * node at least 4.2(recommended version 5.12.0)
  * cmake at least version 3.1
  * cmake-js https://github.com/cmake-js/cmake-js (install with `npm install -g cmake-js`)
  * swig at least 3.0.7
  * pkg-config
  * sphinxbase latest from github
  * pocketsphinx latest from github
  * ffmpe
  
  * The node package has the following dependencies install separately if not found in node-modules
    * express-fileupload
    * body-parser
    * fluent-ffmpeg
    * express
    * fs
    * mail


### Additional notes for pocketsphinx


Make sure that pocketsphinx is installed properly, adjust LD_LIBRARY_PATH if libraries are not found. You can test pocketsphinx with

     pocketsphinx_continuous -infile goforward.raw // Recognize goforward.raw file



## Build the project for your system(needs to be run on your system after installing packages)

first navigate into the server files directory and run

  npm init

## Running the Server

This should generate a build folder if issues occur downgrade/upgrade node to v5.12.0
using commands

  sudo npm cache clean -f
  sudo npm install -g n
  sudo n 5.12.0

### Open the nodefiles and open test1.js in your editor if you want to setup email client for notifications

navigate into the nodefiles folder and run command

  node server.js

the server should start listening on port 3000
you can check by entering http://localhost:3000/ in the address bar of your browser

## Additional notes for setting up server
check your machine ip
for macos
  * use network utility
for linux
  use
  * ifconfig
you can access the server from any device using the address
http://you-ip-address:3000/
eg. http://192.168.43.2:3000/
use http://localhost:3000/upload for uploading files via different interfaces
name the json structure as audio or change in the server.js
req.files.audio to req.files.new-name
