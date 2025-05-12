import {configurestore} from 'reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'
import reducer from '../features/todoslice';
export const store = configurestore({
    reducer:todoReducer
})
