import { configureStore } from "@reduxjs/toolkit";
import recipieSlice from './slices/recipieSlice'
const recipieStore= configureStore({
    reducer :{
       recipieReducer : recipieSlice 

    }
})
export default recipieStore