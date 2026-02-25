import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { ApiError } from 'app/config/apiCall';
import { generateSHA, getAuditLogs } from 'app/config/apis/wallet';
import type {
  AuditLog,
  AuditLogsResponse,
  GenerateSHARequest,
  GenerateSHAResponse,
} from 'app/types/wallet';

type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface AuditState {
  logs: AuditLog[];
  status: RequestStatus;
  error: string | null;
}

const initialState: AuditState = {
  logs: [],
  status: 'idle',
  error: null,
};

export const createAuditHash = createAsyncThunk<
  GenerateSHAResponse,
  GenerateSHARequest,
  { rejectValue: string }
>('audit/createHash', async (payload, { rejectWithValue }) => {
  try {
    return await generateSHA(payload);
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(
      error instanceof Error ? error.message : 'Unexpected error while generating hash',
    );
  }
});

export const fetchAuditLogs = createAsyncThunk<
  AuditLogsResponse,
  void,
  { rejectValue: string }
>('audit/fetchLogs', async (_, { rejectWithValue }) => {
  try {
    return await getAuditLogs();
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue(
      error instanceof Error ? error.message : 'Unexpected error while loading audit logs',
    );
  }
});

const auditSlice = createSlice({
  name: 'audit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createAuditHash.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createAuditHash.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.logs = [action.payload, ...state.logs];
      })
      .addCase(createAuditHash.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Audit hash request failed';
      })
      .addCase(fetchAuditLogs.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAuditLogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.logs = action.payload.logs ?? [];
      })
      .addCase(fetchAuditLogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Audit logs request failed';
      });
  },
});

export const selectAuditLogs = (state: RootState) => state.audit.logs;
export const selectAuditStatus = (state: RootState) => state.audit.status;
export const selectAuditError = (state: RootState) => state.audit.error;
export const selectLatestAuditLog = (state: RootState) => state.audit.logs[0] ?? null;

export default auditSlice.reducer;
