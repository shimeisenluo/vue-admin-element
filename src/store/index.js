import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence({
  key: 'zyic-config',
  storage: window.localStorage
})

const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules
}, {});

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
  getters
})

export default store
