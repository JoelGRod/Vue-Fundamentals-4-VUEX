
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
    getters: {
        squareCount( state ) {
            return state.count * state.count
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
        setIsLoading( state, isLoading ) {
            state.isLoading = isLoading;
            state.lastMutation = 'setLoading'
        }
    },
    actions: {
        async incrementRndInt( context ) {
            context.commit('setIsLoading', true)
            const rndInt = await getRandomInt()
            context.commit('incrementCounterBy', { value: rndInt })
            context.commit('setIsLoading', false)
        }
    },
})

export default store