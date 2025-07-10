import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk('auth/signupUser', async (formData, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        });
        const { accessToken, user } = res.data.data;
        return { accessToken, user };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Signup error');
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (formData, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        });
        const { accessToken, user } = res.data.data;
        return { accessToken, user };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login error');
    }
});

export const verifyToken = createAsyncThunk(
    'auth/verifyToken',
    async (_, thunkAPI) => {
        const token = localStorage.getItem('accessToken');
        if (!token) return thunkAPI.rejectWithValue('No token found');
        try {
            const res = await axios.get('/api/auth/verify-token', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const user = JSON.parse(localStorage.getItem('user'));
            return { accessToken: token, user };
        } catch (err) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            return thunkAPI.rejectWithValue('Invalid or expired token');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(verifyToken.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthenticated = true;
            })
            .addCase(verifyToken.rejected, (state) => {
                state.user = null;
                state.accessToken = null;
                state.isAuthenticated = false;
            });

    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;