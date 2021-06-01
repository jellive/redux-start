import { useRef } from "react"
import { connect } from "react-redux"
import useReduxDispatch from "../hooks/useReduxDispatch"
import { addTodo } from "../redux/actions"

function TodoForm({add}: any) {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useReduxDispatch()
    return inputRef && (<div><input ref={inputRef}></input> <button onClick={click}>추가</button></div>)
  
    function click() {

        if (inputRef.current)
        add(inputRef.current.value)
        // if (inputRef.current)
        // dispatch(addTodo(inputRef.current.value))
    }
}


export default connect((state) => ({}), (dispatch) => ({
    add: (text:string) => {
        dispatch(addTodo(text))
    }
}))(TodoForm)