import { configurationStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export const store = configurationStore({
    reducer: {
        nav: navReducer,
    },
});
