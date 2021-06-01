// state
// ex) ['a', 'b']

// import { Action } from "redux";
import {ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE} from './actions'
import {combineReducers} from 'redux'

// const initialState: any[] = []

// [{text: '코딩', done: false}, {text: '점심 먹기', done: true}]
// {todos: [{text: '코딩', done: false}, {text: '점심 먹기', done: true}], filter: 'ALL'}
const initialState:{
    todos: {text: string, done: boolean}[],
    filter: string
} = {todos: [], filter: 'ALL'}

// 반드시 세부 state를 먼저 해야 함!!
const todosInitialState = initialState.todos
const filterInitialState = initialState.filter


const reducers = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})

export default reducers


 function todosReducer(previousState = todosInitialState, action:any) {

    // 초기값을 설정해주는 부분
    // if (!previousState) {
    //     return []
    // }

    switch(action.type) {
        case ADD_TODO:
            return [...previousState, {text:action.text, done: false}]
        case COMPLETE_TODO:
            return previousState.map((todo:any, index: number) => {
                if (index === action.index) {
                    return {...todo, done: !todo.done}
                }
                return todo
            })
    }
    return previousState
}


 function filterReducer(previousState = filterInitialState, action:any) {

    // 초기값을 설정해주는 부분
    // if (!previousState) {
    //     return []
    // }

    switch(action.type) {
        case SHOW_COMPLETE:
            return 'COMPLETE'
               

        case SHOW_ALL:
            return 'ALL'
    }
    return previousState
}

// export function todoApp(previousState = initialState, action:any) {

//     // 초기값을 설정해주는 부분
//     // if (!previousState) {
//     //     return []
//     // }

//     switch(action.type) {
//         case ADD_TODO:
//             return {...previousState, todos: [...previousState.todos, {text:action.text, done: false}]}
//         case COMPLETE_TODO:
//             return {...previousState, todos: previousState.todos.map((todo:any, index: number) => {
//                 if (index === action.index) {
//                     return {...todo, done: !todo.done}
//                 }
//                 return todo
//             })}
//         case SHOW_COMPLETE:
//             return {
//                 ...previousState,
//                 filter: 'COMPLETE'
//             }

//         case SHOW_ALL:
//             return {...previousState, filter: 'ALL'}
//     }
//     return previousState
// }
