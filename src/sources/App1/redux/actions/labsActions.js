
import * as labsTypes from "../constants/labsTypes";

export function displayByLabs( valueDisplay, id ) {
    var resObj = {id: id, valueDisplay: valueDisplay};
    return {
        type : labsTypes.DISPLAY_BY_LABS,
        result: resObj
    };
}

export function modifyUserbyLab( profile, labs ) {
    console.log("function test labsActions");
    console.log("function test profile = ", profile);
    console.log("function test labs = ", labs);

    /** Detect the profile on the labs **/
    /** return labs **/
    //for ( let lab in labs) {
    //
    //}
    return {
        type : labsTypes.TEST,
        result: null
    };
}