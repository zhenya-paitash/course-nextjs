// module.exports = {
//   webpack: {
//     plugins: [new MyWebpackPlugin()]
//   }
// }

// import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants'
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('Im in dev mode')

    // return defaultConfig
  }

  return defaultConfig
}