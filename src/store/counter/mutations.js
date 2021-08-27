// Counter Mutations
export default {
    incrementCounter(state) {
        state.count++
        state.lastMutation = 'incrementCounter'
    },
    incrementCounterBy(state, params) {
        state.count += params.value
        state.lastMutation = 'incrementCounterBy'
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
        state.lastMutation = 'setLoading'
    }
}