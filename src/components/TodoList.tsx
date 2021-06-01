import { connect } from "react-redux"
import useReduxState from "../hooks/useReduxState"

function TodoList({todos}: {todos:{
    text: string,
    done: boolean}[]}) {
    // const state = useReduxState()
    return <ul>{todos.map((todo) => {
        return <li>{todo.text}</li>
    })}</ul>
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer