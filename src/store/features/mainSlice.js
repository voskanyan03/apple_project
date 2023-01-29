import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
