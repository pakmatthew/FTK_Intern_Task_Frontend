const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://3.18.189.136:4000",
      // target: "http://localhost:4000",
      changeOrigin: true,
      // secure: false,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
