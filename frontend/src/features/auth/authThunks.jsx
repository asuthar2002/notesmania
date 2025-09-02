import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk('auth/signupUser', async (formData, thunkAPI) => {
    try {
        console.log("form data ", formData)
        const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("rsssss", res)
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
        console.log("login res", res)
        const { accessToken, user } = res.data.data;
        return { accessToken, user };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login error');
    }
});

export const verifyToken = createAsyncThunk('auth/verifyToken', async (_, thunkAPI) => {
    const token = localStorage.getItem('accessToken');
    if (!token) return thunkAPI.rejectWithValue('No token found');
    try {
        const res = await axios.get('http://localhost:5000/api/auth/verify-token', {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
        });

        const { user } = res.data.data;
        console.log("user", res.data)
        return { accessToken: token, user };
    } catch (err) {
        if (axios.isAxiosError(err) && [401, 403].includes(err.response?.status)) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
        }

        return thunkAPI.rejectWithValue(
            err.response?.data?.message || 'Token verification failed'
        );
    }
});
