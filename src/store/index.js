import { createStore, createLogger } from 'vuex'
import userModule from './modules/user.module'
import designationModule from './modules/designation.module'
import technologyModule from './modules/technology.module'
import assetsTypeModule from './modules/assetsType.module'
const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  modules: {
    userModule,
    designationModule,
    technologyModule,
    assetsTypeModule,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
