import {
  Config, 
} from '../@interfaces'

import CustomConfig from './custom'

const config: Config = {
  development: {
    backendPort: 43434,
    frontendPort: 44444,
  },

  port: Number(process.env.PORT) || 44444,

  isDevelopment: process.env.NODE_ENV === 'development',

  ...CustomConfig,
}

export default config
