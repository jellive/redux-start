import { useRef } from "react"
import useReduxDispatch from "../hooks/useReduxDispatch"
import { addTodo } from "../redux/actions"


export default function TodoForm() {
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useReduxDispatch()
    return inputRef && (<div><input ref={inputRef}></input> <button onClick={click}>추가</button></div>)
  
    function click() {
        if (inputRef.current) dispatch(addTodo(inputRef.current.value))
    }
}