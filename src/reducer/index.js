import { updateMedicines } from "./medicine";
import { combineReducers } from "redux";
import { addMedicine } from "./medicineData";
import {doctors} from "./doctorsdata"

export const rootReducer = combineReducers({
	updateMedicines,
	addMedicine,
	doctors,
})

export default rootReducer 