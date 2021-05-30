import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// COMPONENTS GETTERS,ACTIONS,STATE,MUTATUINS
import state from '@/store/state/state.js'
import getters from '@/store/getters/getters.js'
import actions from '@/store/actions/actions.js'
import mutations from '@/store/mutatuins/mutatuins.js'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})





