
export default function TodoList({todos}: {todos:{
    text: string,
    done: boolean}[]}) {
    return <ul>{todos.map((todo) => {
        return <li>{todo.text}</li>
    })}</ul>
}
