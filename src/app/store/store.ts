import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './reducers/projects.slice';
import userReducer from './reducers/users.slice';

export const store = configureStore({
    reducer: {
      projects: projectsReducer,
      users: userReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;