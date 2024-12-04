import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Project = {
    id: number;
    name: string;
    // Need to add other necessary fields
  };

  type ProjectsState = {
    projects: Project[];
    status: 'idle' | 'loading' | 'failed';
  };

  const initialState: ProjectsState = {
    projects: [],
    status: 'idle',
  };

  export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/api/projects');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch projects');
      }
    }
  );

  const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProjects.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
          state.projects = action.payload;
          state.status = 'idle';
        })
        .addCase(fetchProjects.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });

export default projectsSlice.reducer;