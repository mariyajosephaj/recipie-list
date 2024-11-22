import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipies = createAsyncThunk("recipies/fetchRecipies",async ()=>{
  const result = await axios.get("https://dummyjson.com/recipes")
  console.log(result.data.recipes);
  sessionStorage.setItem("allRecipies",JSON.stringify(result.data.recipes))
  return result.data.recipes

  
})

const recipieSlice = createSlice({
    name:'recipies',
    initialState:{
        allRecipies : [],
        dummyAllRecipies:[],
         loading:false,
        errorMsg:""
    },
    reducers:{
      searchCuisine : (state,actionByHeader)=>{
        state.allRecipies= state.dummyAllRecipies.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
    }

    },
    extraReducers:(builder)=>{
      builder.addCase(fetchRecipies.fulfilled,(state,apiResult)=>{

           state.allRecipies=apiResult.payload
           state.dummyAllRecipies=apiResult.payload
            state.loading=false
            state.errorMsg=""
      })
      builder.addCase(fetchRecipies.pending,(state)=>{

        state.allRecipies=[]
        state.dummyAllRecipies=[]
         state.loading=true
         state.errorMsg=""
   })
   builder.addCase(fetchRecipies.rejected,(state)=>{

    state.allRecipies=[]
    state.dummyAllRecipies=[]
     state.loading=false
     state.errorMsg="API call failed"
})
    }
})
export const{searchCuisine} = recipieSlice.actions
export default recipieSlice.reducer