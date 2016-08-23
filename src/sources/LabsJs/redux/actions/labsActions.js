
import * as labsTypes from "../constants/labsTypes";

export function displayByLabs( valueDisplay, id ) {
    var resObj = {id: id, valueDisplay: valueDisplay};
    return {
        type : labsTypes.DISPLAY_BY_LABS,
        result: resObj
    };
}

export function showEditProfile(val) {
    console.log("showEditProfile" , val);
    return {
        type : labsTypes.SHOW_EDIT_PROFILE,
        result: val
    };
}

export function showEditStat(val) {
    console.log("showEditStat" , val);
    return {
        type : labsTypes.SHOW_STATS_BY_PROFILE,
        result: val
    };
}

export function modifyUserbyLab( profile, labs ) {
    //console.log("function test labsActions");
    //console.log("function test profile = ", profile);
    //console.log("function test labs = ", labs);

    /** Detect the profile on the labs **/
    /** return labs **/
    var profileId = profile.id;
    for ( var plabs  of labs ) {
        //console.log("lab ", labs);
        for ( let plab  of plabs.labs ) {
            //console.log("lab =", lab);
            for ( let pemployee  of plab.employee ) {
                //console.log("employee =", employee);
                if (pemployee.id === profileId) {
                    console.log("employee.identity ", pemployee.firstName);
                    pemployee.firstName = profile.firstName;
                    pemployee.lastName = profile.lastName;
                    pemployee.mail = profile.mail;
                    pemployee.status = profile.status;
                }
            }

        }
    }
    //console.log("labs", labs);
    /** new timeStamp **/
    labs.date = Math.round(+new Date() / 1000);

    return {
        type : labsTypes.EDIT_DATA_LABS,
        result: labs
    };
}