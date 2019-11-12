import React from "react"
import "normalize.css/normalize.css"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../Redux/store"
import Greeting from "./Greeting"
import { useShopping } from "../Redux/ducks/shopping"
import Form from "./Form"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App(props) {
  const { pro } = useShopping()
  return (
    <div>
      <Greeting banana={pro} />
      <Form />
    </div>
  )
}

export default Wrap
