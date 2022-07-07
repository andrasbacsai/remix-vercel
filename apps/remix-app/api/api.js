const { createRequestHandler } = require("@remix-run/vercel");
console.log('hello')
module.exports = createRequestHandler({
  build: require("./_build"),
});
