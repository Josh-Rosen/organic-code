// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/blog.js")),
  "component---src-pages-blog-hello-gatsby-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/blog/hello-gatsby.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/index.js")),
  "component---src-pages-layout-js": preferDefault(require("/Users/Josh/Desktop/organic-code/src/pages/layout.js"))
}

