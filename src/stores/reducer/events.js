import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from './config'

const initialState = {
    data : [],
    loading: true,
    error : false
}

export const getEvents = createAsyncThunk(
    'GET/GET_EVENTS',
    async() => {
        try {
            const { data } = await axios.get(`${baseUrl}/events`)
            return data
        } catch (err) {
            throw err
        }
    }
)

export const getEventsReducer = createSlice({
    name: 'Events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEvents.fulfilled, (state, action) => {
            state.data = []
            state.data.push(...action.payload)
            state.loading = false
            state.error = false
        }),

        builder.addCase(getEvents.pending,(state,action) => {
            state.loading = true
        })

        builder.addCase(getEvents.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default getEventsReducer.reducer