
const headerPathKey = {
    '/': 0,
    '/fastnews': 1,
    '/currency': 2
  }
  
  const state = {
        tabIndex: -1
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
        changeTabIndex ({ commit }, payload) {
            commit('updateTabIndex', {
                tabIndex: headerPathKey[payload.path] >= 0 ? headerPathKey[payload.path] : -1
            })
        }
  }
  
  // mutations
  const mutations = {
        updateTabIndex (state, { tabIndex }) {
            state.tabIndex = tabIndex
        }
  }
  
  export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
  }
  