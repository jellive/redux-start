import {SHOW_COMPLETE, SHOW_ALL} from '../actions'

const initialState = 'ALL'


 export default function filter(previousState = initialState, action:any) {

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