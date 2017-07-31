var Options = require('options')
var j2x = require('js2xmlparser')
var _ = require('lodash')
var nurl = require('url')

var toSiteMap = function(options) {
  var defaults = {
    prefix: ''
  }
  options = _.merge(defaults, options)
  return buildXML(options.urls, options.prefix)
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
  toSiteMap: toSiteMap
}
