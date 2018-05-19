# SecureCall

There are two packages 
1. Server package
2. Android app

# 1.Server package


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


## Additional notes for pocketsphinx


Make sure that pocketsphinx is installed properly, adjust LD_LIBRARY_PATH if libraries are not found. You can test pocketsphinx with

     pocketsphinx_continuous -infile goforward.raw // Recognize goforward.raw file



## Running the server

first navigate into the server files directory and run

  npm init

This should generate a build folder if issues occur downgrade/upgrade node to v5.12.0
using commands

  sudo npm cache clean -f
  sudo npm install -g n
  sudo n 5.12.0

### Open the nodefiles and open test1,js in your editor if you want to setup email client for notifications

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
