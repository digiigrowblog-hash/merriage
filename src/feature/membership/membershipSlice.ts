import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMembershipDetails, createMembership } from './membershipAPI';

interface MembershipState {
  isMember: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: MembershipState = {
  isMember: false,
  loading: false,
  error: null,
  
};

export const createMembershipAsync = createAsyncThunk(
  'membership/createMembership',
  async (
    { userId, planId }: { userId: string; planId: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await createMembership(userId, planId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.message || 'Failed to create membership');
    }
  }
);

export const fetchMembershipDetailsAsync = createAsyncThunk(
  'membership/fetchMembershipDetails',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await getMembershipDetails(userId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error?.message || 'Failed to fetch membership');
    }
  }
);

const membershipSlice = createSlice({
  name: 'membership',
  initialState,
  reducers: {
    setMembershipStatus(state, action: PayloadAction<boolean>) {
      state.isMember = action.payload;
    },
    clearMembership(state) {
      state.isMember = false;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Membership
      .addCase(createMembershipAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMembershipAsync.fulfilled, (state) => {
        state.loading = false;
        state.isMember = true;
      })
      .addCase(createMembershipAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Membership Details
      .addCase(fetchMembershipDetailsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMembershipDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isMember = !!action.payload;
      })
      .addCase(fetchMembershipDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isMember = false;
      })

      // Optional: handle auth actions properly
      .addCase('auth/signin/fulfilled', (state, action: any) => {
        const { membership } = action.payload;
        state.isMember = !!membership;
      })
      .addCase('auth/signout/fulfilled', (state) => {
        state.isMember = false;
      });
  },
});


export const { setMembershipStatus, clearMembership } =
  membershipSlice.actions;

export default membershipSlice.reducer;
