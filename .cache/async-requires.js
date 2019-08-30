// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-blog-hello-gatsby-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/blog/hello-gatsby.js" /* webpackChunkName: "component---src-pages-blog-hello-gatsby-js" */),
  "component---src-pages-contact-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-layout-js": () => import("/Users/Josh/Desktop/organic-code/src/pages/layout.js" /* webpackChunkName: "component---src-pages-layout-js" */)
}

exports.data = () => import("/Users/Josh/Desktop/organic-code/.cache/data.json")

