import {configureStore} from "@reduxjs/toolkit";
import userReducer from "/src/store/userSlice";
import appReducer from "/src/store/appSlice";



const store = configureStore({
  reducer : {
    user : userReducer,
    app : appReducer,
  }
})

export default store;