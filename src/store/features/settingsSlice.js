import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export const {} = settingsSlice.actions;
export default settingsSlice.reducer;
