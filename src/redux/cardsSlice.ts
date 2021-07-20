import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../components/Card/Card";
import { sampleCards } from "../fixtures/Mockdata";

export interface CardsState {
    cards: Card[]
    status: string
    cardsOpenStatus: boolean[]
}


const initialState: CardsState = {
    cards: sampleCards,
    status: "CLOSED",
    cardsOpenStatus: new Array(sampleCards.length).fill(false)
}

export const cardsSlice = createSlice({
    name: "packStatus",
    initialState,
    reducers: {
        openPack: (state) => {
            state.status = "PACK_OPENED"
        },
        openCard: (state, action: PayloadAction<number>) => {
            state.cardsOpenStatus[action.payload] = true
            if (!state.cardsOpenStatus.includes(false)) {
                state.status = "ALL_OPENED"
            }
        },
    }
})

export const { openPack, openCard } = cardsSlice.actions
export default cardsSlice.reducer