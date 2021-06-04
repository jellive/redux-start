export const ADD_TODO = 'ADD_TODO' as const // const assertions, string이 되지 않고 실제값을 가리킴. 여기서는 컴파일러가 'string' 타입이 아닌 'ADD_TODO' 타입이 된다.
export const COMPLETE_TODO = 'COMPLETE_TODO' as const


//action creator
// {type: ADD_TODO, text: '할일'}
export function addTodo(text: string) {
    return {
        type: ADD_TODO,
        text
    }
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index: number) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

//reducer

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETE = 'SHOW_COMPLETE'

export function showAll() {
    return {type: SHOW_ALL}
}

export function showComplete() {
    return {type: SHOW_COMPLETE}
}