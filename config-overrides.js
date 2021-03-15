const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

module.exports = (config, env) => {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ['/', '/about'],
        staticDir: path.join(__dirname, 'build'),
        postProcess(renderedRoute) {
          // Basic whitespace removal. (Don't use this in production.)
          // renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
          console.log(renderedRoute)
          return renderedRoute
        }
      }),
    ])
  }

  return config
}
