import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from './config'

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
            state.error = false
        })

        builder.addCase(getNews.pending,(state,action) => {
            state.loading = true
        })

        builder.addCase(getNews.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default getNewsreducer.reducer