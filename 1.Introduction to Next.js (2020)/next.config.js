// // // module.exports = {
// // //   webpack: {
// // //     plugins: [new MyWebpackPlugin()]
// // //   }
// // // }

// // // import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants'
// // const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// // module.exports = (phase, { defaultConfig }) => {
// //   if (phase === PHASE_DEVELOPMENT_SERVER) {
// //     console.log('Im in dev mode')

// //     return defaultConfig
// //   }

// //   return defaultConfig
// // }

// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// // next config object
// const config = {}
// module.exports = withMyPlugin(config)

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withEnv = nextEnv()
module.exports = withEnv()
// module.exports = {
//   env: {
//     SECRET: ''
//   }
// }