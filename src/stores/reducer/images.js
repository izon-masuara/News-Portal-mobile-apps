import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from './config'

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
            action.payload.forEach(el => {
                state.data.push(el.files_id)
            })
            state.loading = false
            state.error = false
        })

        builder.addCase(getImage.pending,(state,action) => {
            state.loading = true
        })

        builder.addCase(getImage.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default getNewsImages.reducer