// Store pieces
import state from "./state"
import mutations from './mutations'
import actions from "./actions"
import getters from "./getters";

const counterStore = {

    namespaced: true,

    state() {
        return state
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}

export default counterStore