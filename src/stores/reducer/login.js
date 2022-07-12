import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const baseUrl = 'http://localhost:3001/api'

const initialState = {
    accessToken : null,
    loading : false,
    error : false
}

export const hitLogin = createAsyncThunk(
    'POST/POST_LOGIN',
    async (payload) => {
        try {
            const { data } = await axios.post(`${baseUrl}/login`,payload)
            await AsyncStorage.setItem("token",data)
            return data
        } catch (err) {
            throw err
        }
    }
)

export const postLogin = createSlice({
    name: 'Login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(hitLogin.fulfilled, (state, action) => {
            state.accessToken = action.payload
            state.loading = false
            state.error = false
        })

        builder.addCase(hitLogin.pending,(state,action) => {
            state.loading = true
        })

        builder.addCase(hitLogin.rejected,(state,action) => {
            state.loading = false
            state.error = true
        })
    }
})

export default postLogin.reducer