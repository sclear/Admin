// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,

  chainWebpack: (config) => {
    // nickName
    config.resolve.alias
      .set("@", resolve("src"))
      .set("$common", resolve("src/common"))
      .set("$image", resolve("src/assets/images"))
      .set("$assets", resolve("src/assets"))
      .set("$views", resolve("src/views"))
      .set("$theme", resolve("src/theme"));
  },
  //   pluginOptions: {
  //     "style-resources-loader": {
  //       preProcessor: "less",
  //       patterns: [path.resolve("src/theme/theme.less")]
  //     }
  //   },
  configureWebpack: (config) => {
    // 非开发环境
    if (process.env.NODE_ENV !== "development") {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings =
        false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console =
        true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger =
        true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs =
        ["console.log"];
    }
  },
};
