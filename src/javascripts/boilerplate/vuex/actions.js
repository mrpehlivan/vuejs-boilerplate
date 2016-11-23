import api from '../api'
import * as types from './types'

export const postLogin = (store, testId, data) => {
    api.postData(testId, data).then(
        //success case
         response => {
             if (response.data.status != 'ok') {
                 store.dispatch(types.TEST_FAILURE, {
                     message: "Hey , Some things go bad",
                })
             } else {
                 store.dispatch(types.TEST_SUCCESS, {
                     message: "Hey , You are awesome Dude!!",
                 })
             }
         }
         ,
        //http error case
        response => {
             store.dispatch(types.TEST_FAILURE, {message: response.data.error})
         }

    )
}