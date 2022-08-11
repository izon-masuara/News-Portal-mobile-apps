import { configureStore } from '@reduxjs/toolkit'
import getNewsImages from './reducer/images'
import getEventsReducer  from './reducer/events'
import postLogin from './reducer/login'
import getNewsreducer from './reducer/cardNews'
import dataReducer  from './reducer/data'

export const stores = configureStore({
  reducer: {
    images: getNewsImages,
    events: getEventsReducer,
    login : postLogin,
    news : getNewsreducer,
    organitation : dataReducer
  },
})