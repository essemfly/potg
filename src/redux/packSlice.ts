import { createSlice } from "@reduxjs/toolkit";
import { Pack } from "../components/Pack/Pack";
import { samplePack } from "../fixtures/Mockdata";

const initialState: Pack[] = [
    samplePack
]

export const packSlice = createSlice({
    name: "pack",
    initialState,
    reducers: {}
})

export default packSlice.reducer