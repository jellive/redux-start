export const ADD_TODO = 'ADD_TODO'


//action 
export function addTodo(todo: string) {
    return {
        type: ADD_TODO,
        todo
    }
}

//reducer
