

import * as types from '../constants/labsTypes';

const initialState = {

    labs: {
        date: 1471781338,
        data: [
            {   id : '1',
                labs: [
                    {
                        country : 'France',
                        city: "Paris",
                        employee: [
                            {id: "FRPA001", firstName: "John", lastName: "Doe", mail: "john@example.com", status: "Employee"},
                            {id: "FRPA002", firstName: "jiji", lastName: "Doe", mail: "jiji@example.com", status: "Employee"},
                            {id: "FRPA003", firstName: "juju", lastName: "Doe", mail: "juju@example.com", status: "Employee"}
                        ]
                    }
                ]
            }, {
                id : '2',
                labs: [
                    {
                        country : 'England',
                        city: "London",
                        employee: [
                            {id: "ENLO001", firstName: "Jane", lastName: "Doe", mail: "jane@example.com", status: "Employee"},
                            {id: "ENLO002", firstName: "jojo", lastName: "Doe", mail: "jojo@example.com", status: "Employee"},
                            {id: "ENLO003", firstName: "jaja", lastName: "Doe", mail: "jaja@example.com", status: "Employee"}
                        ]
                    }
                ]
            }, {
                id : '3',
                labs: [
                    {
                        country : 'Belgium',
                        city: "Bruxelles",
                        employee: [
                            {id: "BEBR001", firstName: "Jack", lastName: "Doe", mail: "jack@example.com", status: "Employee"},
                            {id: "BEBR002", firstName: "jeje", lastName: "Doe", mail: "jeje@example.com", status: "Employee"},
                            {id: "BEBR003", firstName: "jaja", lastName: "Doe", mail: "jaja@example.com", status: "Employee"}
                        ]
                    }
                ]
            }
        ]
    },
    display : {
        id: 0,
        content : false
    },
    editUser: {
        display : false
    },
    showEditProfile: {
        display: false
    },
    showStatsByProfile: {
        display: false
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

        case types.EDIT_DATA_LABS:
            return {
                ...state,
                labs : {
                   data: action.result
                },
                showEditProfile: {
                    display: false
                }
            };

        case types.SHOW_EDIT_PROFILE:
            return {
                ...state,
                showEditProfile: {
                    display: action.result
                }
            };

        case types.SHOW_STATS_BY_PROFILE:
            return {
                ...state,
                showStatsByProfile: {
                    display: action.result
                }
            };

        default:
            return state;
    }
}