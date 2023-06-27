import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
    electroID: null,
    AddOrder: [],
    countBucket: 0,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.profile = action.payload.profile;
            localStorage.setItem('user', JSON.stringify(...state.profile))
        },
        removeUser (state) {
            state.profile = null;
            localStorage.removeItem('user');
        },
        electroID(state, action) {  
            state.electroID = action.payload.electroID;
        },  
        AddOrder(state, action) {  
            state.AddOrder = action.payload.AddOrder;  
            state.countBucket = state.AddOrder.length
        },  
            
    },
})

export const {setUser,removeUser,electroID, AddOrder} = userSlice.actions;

export default userSlice.reducer; 