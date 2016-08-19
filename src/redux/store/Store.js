/**
 * Created by Administrateur on 14/08/2016.
 */

import { createStore, combineReducers } from 'redux'

/** Global Web site **/
import textTest from '../reducers/textTest';


/** Others apps  **/
import reduceLabs from '../../sources/App1/redux/reducer/reduceLabs';


/** List of reducers **/
const rootReducer = combineReducers({
    textTest, reduceLabs
});

let store = createStore(rootReducer);

export default store;



