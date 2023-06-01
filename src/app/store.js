import { configureStore } from "@reduxjs/toolkit";
import allstudent from "../features/CrudSlice";
export const store = configureStore({
    reducer: {
        stuDetails: allstudent
    },
});