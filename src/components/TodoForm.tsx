import { useRef } from "react"

export default function TodoForm({add}: any) {
    const inputRef = useRef<HTMLInputElement>(null)
    return inputRef && (<div><input ref={inputRef}></input> <button onClick={click}>추가</button></div>)
  
    function click() {

        if (inputRef.current)
        add(inputRef.current.value)
    }
}
