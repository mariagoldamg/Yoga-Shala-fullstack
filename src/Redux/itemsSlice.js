import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
    name:"items",
    initialState: {
        selectedCategory:"CLOTHING"
    },

    reducers: {
        filteredCategory: (state,action)=>{
            state.selectedCategory = action.payload;
        }
    }
})


export const {filteredCategory} =itemsSlice.actions;
export const getSelectedCategory = state => state.items.selectedCategory;
export default itemsSlice.reducer;