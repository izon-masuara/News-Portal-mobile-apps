import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

const initialState = {
    data: [],
    loading: false,
    error : false
}

export const getNews = createAsyncThunk(
    'GET/GET_NEWS',
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/news`)
            return data
        } catch (err) {
            throw err
        }
    }
)

export const getNewsreducer = createSlice({
    name: 'News',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.data = []
            state.data.push(...action.payload)
            state.loading = false
        })
        builder.addCase(getNews.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default getNewsreducer.reducer