#!/usr/bin/env node
const ms = require('../index.js');

let xml = ms.mergeSitemapFiles(process.argv[2], process.argv[3])
console.log(xml)
