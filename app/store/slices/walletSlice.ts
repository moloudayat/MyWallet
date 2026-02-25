import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { ApiError } from 'app/config/apiCall';
// Types
import type { RegisterAndLoginResponse, RegisterParams } from 'app/types/user';
import { signUpAndLogin } from 'app/config/apis/user';

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface WalletState {
  did: string | null;
  fullName: string | null;
  email: string | null;
  verificationStatus: string | null;
  token: string | null;
  refreshToken: string | null;
  registerStatus: RequestStatus;
  registerError: string | null;
}

const initialState: WalletState = {
  did: null,
  fullName: null,
  email: null,
  verificationStatus: null,
  token: null,
  refreshToken: null,
  registerStatus: 'idle',
  registerError: null,
};

export const registerUser = createAsyncThunk<
  RegisterAndLoginResponse,
  RegisterParams,
  { rejectValue: string }
>('wallet/registerUser', async (payload, { rejectWithValue }) => {
  try {
    const data = await signUpAndLogin(payload);
    if (!data?.token || !data?.refreshToken) {
      return rejectWithValue('Login succeeded without valid tokens.');
    }
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : 'Unexpected error while registering',
    );
  }
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    clearRegisterError(state) {
      state.registerError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.registerStatus = 'loading';
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        state.did = action.payload.did;
        state.fullName = action.payload.vc?.credentialSubject?.fullName ?? null;
        state.email = action.payload.vc?.credentialSubject?.email ?? null;
        state.verificationStatus =
          action.payload.vc?.credentialSubject?.verificationStatus ?? null;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = 'failed';
        state.registerError = action.payload ?? 'Register request failed';
        state.token = null;
        state.refreshToken = null;
      });
  },
});

export const { clearRegisterError } = walletSlice.actions;

export const selectWalletDid = (state: RootState) => state.wallet.did;
export const selectWalletFullName = (state: RootState) => state.wallet.fullName;
export const selectWalletEmail = (state: RootState) => state.wallet.email;
export const selectWalletVerificationStatus = (state: RootState) =>
  state.wallet.verificationStatus;
export const selectWalletToken = (state: RootState) => state.wallet.token;
export const selectWalletRefreshToken = (state: RootState) =>
  state.wallet.refreshToken;
export const selectRegisterStatus = (state: RootState) =>
  state.wallet.registerStatus;
export const selectRegisterError = (state: RootState) =>
  state.wallet.registerError;

export default walletSlice.reducer;
