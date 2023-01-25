import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export default mainSlice.reducer;
