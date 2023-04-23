import { MEDICENSERROR, MEDICENSUCCSESS,MEDICEREQEST } from "../Constent";


export const getMedicen = () => async (dispatch) => {
     try {
        dispatch ({type : MEDICEREQEST })
        const data = await fetch ('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => res)
        dispatch ({type : MEDICENSUCCSESS , payload : data })
    } catch (error) {
        dispatch ({type : MEDICENSERROR})
    }
}