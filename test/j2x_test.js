var expect = require('expect.js')
var j2x = require('js2xmlparser')

describe('j2x', function() {
  it('should create properly formatted xml', function() {
    var result = j2x.parse('urlset', {
      '@': {xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'},
      url: [
        {loc: 'one'},
        {loc: 'two'}
      ],
    })
    expect(result).to.be(
      '<?xml version=\'1.0\'?>\n<urlset xmlns=\'http://www.sitemaps.org/schemas/sitemap/0.9\'>\n    <url>\n        <loc>one</loc>\n    </url>\n    <url>\n        <loc>two</loc>\n    </url>\n</urlset>'
    )
  })
})
