import { useCallback } from "react"
import { connect, useDispatch } from "react-redux"
import TodoForm from "../components/TodoForm"
import { addTodo } from "../redux/actions"


// const TodoFormContainer = connect((state) => ({}), (dispatch) => ({
//     add: (text:string) => {
//         dispatch(addTodo(text))
//     }
// }))(TodoForm)

function TodoFormContainer() {
    const dispatch = useDispatch()
    const add = useCallback((text:string) => {

        dispatch(addTodo(text))
    }, [dispatch])
    return <TodoForm add={add}/>
}

export default TodoFormContainer