
import { createStore } from 'vuex'
// Helpers / Services
import getRandomInt from '../helpers/getRandomInt'

const store = createStore({

    state() {
        return {
            count: 1,
            lastMutation: 'none',
            isLoading: false
        }
    },
    mutations: {
        incrementCounter( state ) {
            state.count++
            state.lastMutation = 'incrementCounter'
        },
        incrementCounterBy( state, params ) {
            state.count += params.value
            state.lastMutation = 'incrementCounterBy'
        },
    },
    actions: {
        async incrementRndInt( context ) {
            const rndInt = await getRandomInt()
            context.commit('incrementCounterBy', { value: rndInt })
        }
    }

})

export default store