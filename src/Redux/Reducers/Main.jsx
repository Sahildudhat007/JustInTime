// combine all reducer here and then send store
// (object wise)

import { combineReducers } from "redux";
import { cartreducer } from "./Reducer";

const rootReducer = combineReducers({
    cartreducer,
})

export default rootReducer;