import { connect, useSelector } from "react-redux"
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

// HOC 패턴. 커스텀 훅이 나오면서 더는 권장되지 않음
// const TodoListContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)

function TodoListContainer() {
    const todos = useSelector((state: any) => state.todos)
    return <TodoList todos={todos}/>
}

export default TodoListContainer