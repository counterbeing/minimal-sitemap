var expect = require('expect.js')
var ms = require('../index.js')
var fs = require('fs')

describe('toSiteMap', function() {
  it('should work without a prefix', function() {
    var result = '<?xml version=\'1.0\'?>\n<urlset xmlns=\'http://www.sitemaps.org/schemas/sitemap/0.9\'>\n    <url>\n        <loc>one</loc>\n    </url>\n    <url>\n        <loc>two</loc>\n    </url>\n</urlset>'
    expect(result).to.be(ms.toSiteMap(
      { urls: ['one', 'two'] }
    ))
  })

  it('add a prefix', function() {
    var result = '<?xml version=\'1.0\'?>\n<urlset xmlns=\'http://www.sitemaps.org/schemas/sitemap/0.9\'>\n    <url>\n        <loc>https://site.co/one</loc>\n    </url>\n    <url>\n        <loc>https://site.co/two</loc>\n    </url>\n</urlset>'
    expect(ms.toSiteMap(
      { urls: ['one', 'two'], prefix: 'https://site.co' }
    )).to.be(result)
  })
})

describe('combineXML',  function () {
  it('returns merged xml', function () {
    let xmlA = fs.readFileSync('test/fixtures/one.xml')
    let xmlB = fs.readFileSync('test/fixtures/two.xml')
    let result = ms.combineXML(xmlA, xmlB)
    expect(result).to.be('<?xml version="1.0" encoding="utf-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>one</loc></url><url><loc>two</loc></url></urlset>')
  })
})
