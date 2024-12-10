import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProjectService from '../../services/api/project.service';

  type ProjectsState = {
    projects: any[];
    totalCount: number;
    status: 'idle' | 'loading' | 'failed';
  };

  const initialState: ProjectsState = {
    projects: [],
    totalCount: 0,
    status: 'idle',
  };

  interface fetchProjectsArgsTypes {
    projectName?: string | null;
    status?: string | null;
    createdBy?: string | null;
    fromDate?: string | null;
    toDate?: string | null;
    page?: number;
    limit?: number;
  }

  export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async ( filters : fetchProjectsArgsTypes , thunkAPI) => {
      try {
        const response = await ProjectService.fetchProjects(filters);
        return {
          projects: response.data,
          totalCount: response.totalCount
        };
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
          state.projects = action.payload.projects;
          state.totalCount = action.payload.totalCount;
          state.status = 'idle';
        })
        .addCase(fetchProjects.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });

export default projectsSlice.reducer;