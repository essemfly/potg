import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../redux/cardsSlice'
import packReducer from '../redux/packSlice'

export const store = configureStore({
    reducer: {
        pack: packReducer,
        cards: cardsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch