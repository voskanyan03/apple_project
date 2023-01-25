import { configureStore } from "@reduxjs/toolkit";
import main from "./features/mainSlice";
import settings from "./features/settingsSlice";


export const store = configureStore({
    reducer: {
        main, // mainSlice
        settings, // settingsSlice
    }
})