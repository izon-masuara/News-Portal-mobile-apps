import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

const initialState = {
    data: [],
    loading: true,
    error: false
}

export const getImage = createAsyncThunk(
    'GET/GET_IMAGES',
    async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/images`)
            return data
        } catch (err) {
            throw err
        }
    }
)

export const getNewsImages = createSlice({
    name: 'Images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImage.fulfilled, (state, action) => {
            state.data = []
            if (action.payload.length > 0) {
                action.payload[0].files_id.forEach(el => {
                    state.data.push(el)
                })
            }
            state.loading = false
        })

        builder.addCase(getImage.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default getNewsImages.reducer