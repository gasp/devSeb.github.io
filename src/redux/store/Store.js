/**
 * Created by Administrateur on 14/08/2016.
 */

import { createStore, combineReducers } from 'redux'

import textTest from '../reducers/textTest';


/** List of reducers **/
const rootReducer = combineReducers({
    textTest
});

let store = createStore(rootReducer);

export default store;



