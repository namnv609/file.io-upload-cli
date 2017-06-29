# File.IO upload CLI

## Installation

* Clone project
  * `git clone https://github.com/namnv609/file.io-upload-cli && cd file.io-upload-cli`
* Install required modules
  * `npm install`

## Usage

* Show help
  * `node index.js --help/-h`
* Upload file
  * `node index.js -f <Path to file>`
* Upload with expires
  * `node index.js -f <Path to file> -e 1w`
    * `w` for week
    * `m` for month
    * `y` for year
