import { faBorderNone } from '@fortawesome/free-solid-svg-icons'
import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "",
        email: "",
        licenseplate: "",
        password: "",
        showElement: true
    },
    getters: {
    },
    mutations: {
        changeName(state) {
            state.name = "Tawan"
        },
        changeElement(state) {
            showElement = !showElement
        }
    },
    actions: {
    },
    modules: {
    }
})

