const j2x = require('js2xmlparser')
const _ = require('lodash')
const nurl = require('url')
const fs = require('fs')
const convert = require('xml-js')


var toSiteMap = function(options) {
  var defaults = {
    prefix: ''
  }
  options = _.merge(defaults, options)
  return buildXML(options.urls, options.prefix)
}

var toSiteMapFile = function(options) {
  var defaults = {
    file: null,
    prefix: ''
  }
  options = _.merge(defaults, options)
  let xml = buildXML(options.urls, options.prefix)
  fs.writeFileSync(options.file, xml)
}

function combineXML(xmlA, xmlB) {
  let objA = convert.xml2js(xmlA)["elements"][0]["elements"]
  let objB = convert.xml2js(xmlB)["elements"][0]["elements"]
  let mergedValues = objA.concat(objB)
  let newJsObject = {
    "declaration": {
      "attributes": {"version":"1.0","encoding":"utf-8"}
    },
    "elements": [
      {
        "type": "element",
        "name": "urlset",
        "attributes": {
          "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"
        },
        "elements": mergedValues
      }
    ]
  }
  return convert.js2xml(newJsObject)
}

function buildXML(urls, prefix) {
  var locs = _.map(urls, function(url) {
    var joined = nurl.resolve(prefix, url)
    return {loc: joined}
  })
  var baseObject = {
    '@': {xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'},
    url: locs
  }

  return j2x.parse('urlset', baseObject)
}

module.exports = {
  toSiteMap: toSiteMap,
  toSiteMapFile: toSiteMapFile,
  combineXML: combineXML,
}
