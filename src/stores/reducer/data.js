import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {baseUrl} from './config'

const initialState = {
    data : [],
    loading: true,
    error : false
}

export const getData = createAsyncThunk(
    'GET/GET_ORGANITATION',
    async() => {
        try {
            const { data } = await axios.get(`${baseUrl}/data/structure`)
            return data
        } catch (err) {
            throw err
        }
    }
)

export const dataReducer = createSlice({
    name: 'Organitation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.data = []
            state.data.push(...action.payload)
            state.loading = false
        }),
        builder.addCase(getData.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(getData.rejected,(state,action) => {
            state.error = true
        })
    }
})

export default dataReducer.reducer