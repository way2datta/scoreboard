import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
import open from 'open';

const app = express();
const landingPage = path.join(__dirname, "index.html");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(landingPage, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.log(`App listening to ${PORT}....`);
    console.log("Press Ctrl+C to quit.");
    open('http://localhost:'+PORT);
  }
});
