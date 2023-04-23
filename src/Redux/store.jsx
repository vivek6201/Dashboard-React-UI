import { configureStore } from '@reduxjs/toolkit'
import accReducer from "./Slices/AccordianSlice"

export const store = configureStore({
  reducer: {
    accordian : accReducer
  },
})