import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getMyFestivalPassApi,
  createFestivalPassApi,
  useFestivalPassApi
} from "./passessAPI";


// FETCH MY PASS
export const fetchMyFestivalPass = createAsyncThunk(
  "festivalPass/fetchMyFestivalPass",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMyFestivalPassApi();
      return data.pass;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Error");
    }
  }
);


// CREATE PASS
export const createFestivalPass = createAsyncThunk(
  "festivalPass/createFestivalPass",
  async (payload: { isFree?: boolean }, { rejectWithValue }) => {
    try {
      return await createFestivalPassApi(payload);
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Error");
    }
  }
);


// USE PASS
export const useFestivalPass = createAsyncThunk(
  "festivalPass/useFestivalPass",
  async (passId: number, { rejectWithValue }) => {
    try {
      return await useFestivalPassApi(passId);
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Error");
    }
  }
);



const festivalPassSlice = createSlice({
  name: "festivalPass",

  initialState: {
    pass: null as any,
    loading: false,
    error: null as any
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

    // FETCH
    .addCase(fetchMyFestivalPass.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchMyFestivalPass.fulfilled, (state, action) => {
      state.loading = false;
      state.pass = action.payload;
    })
    .addCase(fetchMyFestivalPass.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    // CREATE
    .addCase(createFestivalPass.pending, (state) => {
      state.loading = true;
    })
    .addCase(createFestivalPass.fulfilled, (state, action) => {
      state.loading = false;
      state.pass = action.payload;
    })
    .addCase(createFestivalPass.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })


    // USE
    .addCase(useFestivalPass.fulfilled, (state, action) => {
      state.pass = action.payload;
    });

  }
});

export default festivalPassSlice.reducer;
