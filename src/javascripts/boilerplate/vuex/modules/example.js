// imports
import {
    TEST_SUCCESS,TEST_FAILURE
} from '../types'

const state = {
    "message" : ""

}

const mutations = {
    [TEST_SUCCESS](state , action){
        state.message = action.message
    },
    [TEST_FAILURE](state , action){
        state.message = action.message
    }
}

// exports
export default {
    state,
    mutations
}
