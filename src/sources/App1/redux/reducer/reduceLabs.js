

import * as types from '../constants/labsTypes';

const initialState = {

    display : {
        id: 0,
        content : false
    }
};

export default function displayByLabs( state = initialState , action) {
    console.log("displayByLabs begin :", action);
    switch (action.type) {

        case types.DISPLAY_BY_LABS:
            return {
                ...state,
                display : {
                    id: action.result.id,
                    content : action.result.valueDisplay
                }
            };

        default:
            return state;
    }
}