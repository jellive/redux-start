// state
// ex) ['a', 'b']

import { Action } from "redux";
import {ADD_TODO} from './actions'

const initialState: any[] = []

export function todoApp(previousState = initialState, action:any) {

    // 초기값을 설정해주는 부분
    // if (!previousState) {
    //     return []
    // }

    switch(action.type) {
        case ADD_TODO:
            return [...previousState, action.todo]
    }
    return previousState
}