import { configureStore } from '@reduxjs/toolkit'
import getNewsImages from './reducer/index'

export const stores = configureStore({
  reducer: {
    images: getNewsImages,
  },
})