import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import globalAppConfig from '../../config/global-app-config';

type UserState = {
    isLoggedIn: boolean;
    userData: any;
    status: 'idle' | 'loading' | 'failed';
  };
  
  const initialState: UserState = {
    isLoggedIn: false,
    userData: null,
    status: 'idle',
  };
  
  export const login = createAsyncThunk(
    'user/login',
    async (credentials: { email: string; password: string }, thunkAPI) => {
      try {
        console.log('url ->',globalAppConfig.baseApiUrl)
        const response = await axios.post(`${globalAppConfig.baseApiUrl}/users/login`, credentials);
        return response.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Login failed');
      }
    }
  );
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        state.isLoggedIn = false;
        state.userData = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoggedIn = true;
          state.userData = action.payload;
          state.status = 'idle';
        })
        .addCase(login.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });
  
  export const { logout } = userSlice.actions;
  export default userSlice.reducer;