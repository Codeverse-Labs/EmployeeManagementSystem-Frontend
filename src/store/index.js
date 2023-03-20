import { createStore, createLogger } from 'vuex'
import userModule from './modules/user.module'
import categoryModule from './modules/category.module'
import designationModule from './modules/designation.module'
import technologyModule from './modules/technology.module'
import postModule from './modules/post.module'
const debug = process.env.NODE_ENV !== 'production'


export default createStore({
  modules: {
    userModule,
    categoryModule,
    designationModule,
    technologyModule,
    postModule,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
