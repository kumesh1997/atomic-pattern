import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProjectService from '../../services/api/project.service';


type Project = {
  projectId: number;
  name: string;
  createdBy: string;
  createdDate: string;
  startDate: string;
  endDate: string;
  status: string;
};

  type ProjectsState = {
    projects: any[];
    status: 'idle' | 'loading' | 'failed';
  };

  const initialState: ProjectsState = {
    projects: [],
    status: 'idle',
  };

  interface fetchProjectsArgsTypes {
    projectName?: string | null;
    status?: string | null;
    createdBy?: string | null;
    fromDate?: string | null;
    toDate?: string | null;
  }

  export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async ( filters : fetchProjectsArgsTypes , thunkAPI) => {
      try {
        const response = await ProjectService.fetchProjects(filters);
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