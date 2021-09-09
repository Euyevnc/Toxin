const faviconsContext = require.context(
  '!!file-loader?name=assets/favicons/[name].[ext]!../../assets/favicons',
  true,
  /\.(svg|png|ico|xml|json)$/,
);
faviconsContext.keys().forEach(faviconsContext);

const fontsContext = require.context(
  '!!file-loader?name=assets/fonts/[name].[ext]!../../assets/fonts',
  true,
  /\.(ttf|woff|woff2|eot|svg)$/,
);
fontsContext.keys().forEach(fontsContext);
