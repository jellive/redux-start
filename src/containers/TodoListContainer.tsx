import { connect } from "react-redux"
import TodoList from "../components/TodoList"

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