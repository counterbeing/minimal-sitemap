# Minimal Sitemap

A couple of very simple tools to create basic sitemaps when you have an array of urls.

## Usage

### `toSiteMap({urls: Array, [prefix: String]})`
Accepts an options object.

```js
var ms = require('minimal-sitemap')

let sitemapString = ms.toSiteMap({
  urls: ['one', 'two', 'three'],
  prefix: 'https://mysi.te'
})

```

The value of `sitemapString` will then be:

```
<?xml version='1.0'?>
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
    <url>
        <loc>https://mysi.te/one</loc>
    </url>
    <url>
        <loc>https://mysi.te/two</loc>
    </url>
    <url>
        <loc>https://mysi.te/three</loc>
    </url>
</urlset>
```
