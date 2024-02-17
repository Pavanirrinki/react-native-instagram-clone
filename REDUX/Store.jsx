import { createStore,applyMiddleware,combineReducers } from "redux";
import { thunk} from "redux-thunk";
import UserDetailsReducer from "./Reducers/userReducers.jsx";

const rootReducer = combineReducers({
  userreducer:UserDetailsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;