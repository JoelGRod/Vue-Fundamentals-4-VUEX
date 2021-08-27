import { createStore } from 'vuex'
// Modules
import counterStore from "./counter";   // Take index.js directly

const store = createStore({

    modules: {
        counter: counterStore,
    }
    
})

export default store