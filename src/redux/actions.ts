const ADD_TODO = 'ADD_TODO'

function addTodo(todo: string) {
    return {
        type: ADD_TODO,
        todo
    }
}