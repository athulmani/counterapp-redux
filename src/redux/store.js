import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../coumponunts/counterSlice";


export const store = configureStore({
    reducer : {
//reduder shoulb in keyvalue pair so it shoulb in object type
counter:counterSlice
    }
})