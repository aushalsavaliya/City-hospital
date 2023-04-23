import { DOCTORERROR, DOCTORREQEST, DOCTORSUCCSESS } from "../Constent";

export const getDoctors = () => async (dispatch) => {
    try {
        dispatch({ type: DOCTORREQEST })
        const data = await fetch('https://jsonplaceholder.typicode.com/users').than(res => res.json()).than(res => res)
        dispatch({ type: DOCTORSUCCSESS, payload: data })
    } catch (error) {
        dispatch({ type: DOCTORERROR })
    }
}