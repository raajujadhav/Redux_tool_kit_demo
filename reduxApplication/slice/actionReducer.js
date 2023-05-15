import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//Action

export const fetchUserDetails=createAsyncThunk("fetchUserDetails",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications");
    return response.json();
    
});
export const fetchUserDetail=createAsyncThunk("fetchUserDetail",async()=>{
    const response=await fetch("https://engineering-task.elancoapps.com/api/applications/Macao");
    return response.json();
    
});


const userSlice=createSlice({
    name:"users",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        userDetails:[],
    },
    extraReducers:(builders)=>{
        builders.addCase(fetchUserDetails.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builders.addCase(fetchUserDetails.rejected,(state, action)=>{
            state.isError=true;
        });
        builders.addCase(fetchUserDetail.pending,(state,action)=>{
            state.isLoading=true;
        });
        builders.addCase(fetchUserDetail.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userDetails=action.payload;
        });
        builders.addCase(fetchUserDetail.rejected,(state, action)=>{
            state.isError=true;
        });
    },
});



export default userSlice.reducer;
