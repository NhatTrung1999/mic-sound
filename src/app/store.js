import {configureStore} from '@reduxjs/toolkit';
import micReducer from '../features/micSound/micSlice'

export default configureStore({
    reducer: {
        mic: micReducer
    }
})