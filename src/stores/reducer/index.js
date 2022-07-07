import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

const initialState = {
    images: [],
    news: [],
    loading: true
}

export const getImage = createAsyncThunk(
    'GET/GET_IMAGES',
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/images`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const getNews = createAsyncThunk(
    'GET?GET_NEWS',
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/news`)
            return data
        } catch (err) {
            console.log(err)
        }
    }
)

export const getNewsImages = createSlice({
    name: 'Images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImage.fulfilled, (state, action) => {
            state.images = []
            if (action.payload.length > 0) {
                action.payload[0].files_id.forEach(el => {
                    state.images.push(el)
                })
            }
        });

        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news = []
            state.news.push(...action.payload)
        });
    }
})

export default getNewsImages.reducer