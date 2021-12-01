import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        count: state => {
            return state.count
        }
    },
    mutations: {
        increment: state => {
            state.count+=2
        },
        decrement: state => {
            state.count--
        }

    },
    actions: {
        asyncincrement: context => {
            setTimeout(
                () => {
                    context.commit('increment')
                   
                }

                , 3000);

        },
        asyncdecrement: context => {

            setTimeout(
                () => {
                    context.commit('decrement')
                }

                , 4000);

        },
       syncincrement: context => {
        context.commit('increment')    

        },
        syncdecrement: context => {
            context.commit('decrement')
        }


    },
    modules: {}
});