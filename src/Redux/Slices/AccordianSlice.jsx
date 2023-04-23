import { createSlice } from '@reduxjs/toolkit'
import { accArray } from '../../AccArray'

const initialState = {
  value: accArray[0],
  isActive: false
}

export const accordianSlice = createSlice({
  name:'accordian',
  initialState,
  reducers:{
    changeValue: (state,action) =>{
      state.value = action.payload;
    },
    changeAccState: (state) =>{
      state.isActive = !state.isActive
    }
  }
})

export const {changeValue,changeAccState} = accordianSlice.actions;

export default accordianSlice.reducer;