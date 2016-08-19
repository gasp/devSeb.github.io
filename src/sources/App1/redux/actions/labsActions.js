
import * as labsTypes from "../constants/labsTypes";

export function displayByLabs( valueDisplay, id ) {
    var resObj = {id: id, valueDisplay: valueDisplay};
    return {
        type : labsTypes.DISPLAY_BY_LABS,
        result: resObj
    }
}