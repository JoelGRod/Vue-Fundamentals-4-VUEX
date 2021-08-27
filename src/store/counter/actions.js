// Counter Actions
// Helpers / Services
import getRandomInt from '../../helpers/getRandomInt'

export default {
    async incrementRndInt(context) {
        context.commit('setIsLoading', true)
        const rndInt = await getRandomInt()
        context.commit('incrementCounterBy', { value: rndInt })
        context.commit('setIsLoading', false)
    }
}