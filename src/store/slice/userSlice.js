import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
    electroID: null,
    AddOrder: [],
    countBucket: 0,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email =  action.payload.email;
            state.token =  action.payload.token;
            state.id =  action.payload.id;
            localStorage.setItem('user', state.email)
        },
        removeUser (state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        electroID(state, action) {  
            state.electroID = action.payload.electroID;
            console.log("ID", state.electroID)
        },  
        AddOrder(state, action) {  
            state.AddOrder = action.payload.AddOrder;  
            state.countBucket = state.AddOrder.length
            console.log("AddOrder", state.AddOrder)
            // console.log("count", state.countBucket)   
        },  
            
    },
})

export const {setUser,removeUser,electroID, AddOrder} = userSlice.actions;

export default userSlice.reducer; 