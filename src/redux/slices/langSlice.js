import { createSlice } from '@reduxjs/toolkit'
import i18n from '../../../i18n'


const initialState = {
  value: 0,
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    language: (state, action) => {
      
      state.value = action.payload
      i18n.changeLanguage(action.payload.lngu)
    },
 
  },
})

// Action creators are generated for each case reducer function
export const {language  } = languageSlice.actions

export default languageSlice.reducer