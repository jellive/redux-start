import {combineReducers} from 'redux'
import filter from './filter'
import todos from './todo'

const reducer = combineReducers({
    todos: todos,
    filter: filter
})

export default reducer