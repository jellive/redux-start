import { createContext } from "react";

import store from '../redux/store'
const ReduxContext = createContext(store) // context에 store를 연결해준다.

export default ReduxContext