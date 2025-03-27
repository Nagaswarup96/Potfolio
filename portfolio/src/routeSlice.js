import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    routeTo : ''
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers:{
        aboutMe:(state)=>{
            state.value.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
})