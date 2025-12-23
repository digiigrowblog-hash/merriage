import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { signup, Signin } from "./authAPI";
import { User } from "@/types/index";

interface AuthState {
  user: User | null;
  userId: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  userId: null,
  status: "idle",
  error: null,
};

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (user: any, { rejectWithValue }) => {
    try {
      const response = await signup(user);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signinAsync = createAsyncThunk(
  "auth/signin",
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await Signin(user);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.userId = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userId = action.payload.userId!;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      .addCase(signinAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signinAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userId = action.payload.userId || action.payload.user?.id!;
        // If backend returns full user, use it:
        // state.user = action.payload.user;
      })
      .addCase(signinAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;
