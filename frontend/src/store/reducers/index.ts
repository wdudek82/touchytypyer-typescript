import { combineReducers } from "redux";
import exercisesReducer from "./exercisesReducer";

export default combineReducers({
  exercisesState: exercisesReducer,
});
