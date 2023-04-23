import { DOCTORERROR, DOCTORREQEST, DOCTORSUCCSESS } from "../Constent";

const initialstate = {
    data: [],
    loding: false
}

export const doctors = (state = initialstate, action) => {
    if (action.type === DOCTORREQEST) {
        return { ...state, loding: true }
    }

    if (action.type === DOCTORSUCCSESS) {
        const data = action.payload
        return { ...state, data, loding: false }
    }

    if (action.type === DOCTORERROR) {
        return { ...state, loding: false }
    }

    return state
}