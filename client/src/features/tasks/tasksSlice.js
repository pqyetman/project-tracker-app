import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", (id) => {
  // return a Promise containing the data we want
  return fetch(`/projects/${id}/tasks`)
    .then((response) => response.json())
    .then((data) => data);
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    entities: [], // array of tasks
    status: "idle", // loading state
  },
  reducers: {
    taskAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    tasksUpdated(state, action) {
      const task = state.entities.find((task) => task.id === action.payload.id);
      task.open = action.payload.open;
    },
    tasksDeleted(state, action) {
      const index = state.entities.findIndex((task) => task.id === action.payload);
      state.entities.splice(index, 1);
    //  state.entities.filter(((task) => task.id !== action.payload.id));
    },

  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchTasks.pending](state) {
      state.status = "loading";
    },
    [fetchTasks.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { taskAdded, tasksUpdated, tasksDeleted } = tasksSlice.actions;

export default tasksSlice.reducer;