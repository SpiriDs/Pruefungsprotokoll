import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: [{
        "pruefer": '',
        "beisitzer": '',
        "datum": '',
        "pruefungsort": '',
        "pruefungsfragen": '',
        "persoenlicheEindruecke": ''
    }],
    getters: {
        pruefer(state) {
            return state.pruefer
        },
        beisitzer(state) {
            return state.beisitzer
        },
        datum(state) {
            return state.datum
        },
        pruefungsort(state) {
            return state.pruefungsort
        },
        pruefungsfragen(state) {
            return state.pruefungsfragen
        },
        persoenlicheEindruecke(state) {
            return state.persoenlicheEindruecke
        },
    },
    mutations: {
        updatePruefer(state, pruefer) {
            state.obj.pruefer = pruefer
        }
    },
    actions: {
        //TODO: implement actions
    },
})

