import { createSlice } from "@reduxjs/toolkit";
import { Pack } from "../Models/Types";
import { samplePack } from "../Models/Mockdata";

const initialState: Pack[] = [
    samplePack
]

export const packSlice = createSlice({
    name: "pack",
    initialState,
    reducers: {}
})

export default packSlice.reducer