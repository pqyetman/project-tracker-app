import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("projects/fetchProjects", () => {
  // return a Promise containing the data we want
  return fetch("/projects")
    .then((response) => response.json())
    .then((data) => data);
});

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    entities: [], // array of projects
    status: "idle", // loading state
  },
  reducers: {
    projectAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    projectsUpdated(state, action) {
      const project = state.entities.find((project) => project.id === action.payload.id);
      project.open = action.payload.open
      project.total = action.payload.total;
    },
    projectsDeleted(state, action) {
      
      state.entities.filter(((project) => project.id !== action.payload.id));
    },

  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchProjects.pending](state) {
      state.status = "loading";
    },
    [fetchProjects.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { projectAdded, projectsUpdated, projectsDeleted } = projectsSlice.actions;

export default projectsSlice.reducer;