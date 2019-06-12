// Объединение всех редюсеров в один

import { combineReducers } from 'redux';
import books from './books';

export default combineReducers({
    books
})