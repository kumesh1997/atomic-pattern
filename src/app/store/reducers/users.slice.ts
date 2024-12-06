import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/api/user.service';

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
        const response = await UserService.login(credentials);
        localStorage.setItem('secret', response.data.token);
        return response.data;
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