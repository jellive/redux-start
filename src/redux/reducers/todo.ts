import {ADD_TODO, COMPLETE_TODO} from '../actions'

const initialState: {text: string, done: boolean}[] = []

 export default function todos(previousState = initialState, action:any) {

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
