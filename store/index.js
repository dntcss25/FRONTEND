import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default ()=> new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        }
    },
    actions: {
        async getUsers({commit}){
            try {
                let user = await this.$axios.get(`/users`)
                this.users = user.data;
                commit('SET_USERS', users.map(u => u.attributes));
            } catch (error) {
                console.log('error :>> ', error);
            }
        }
    },
    getters: {
        getTag: state => id => {
            return state.tags.find(t=> t.id == id)
        }
    }
})