import React from "react"
import "normalize.css/normalize.css"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../Redux/store"
import Greeting from "./Greeting"
import { usePotato } from "../Redux/ducks/shopping"
import Form from "./Form"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App(props) {
  const { pro } = usePotato()
  return (
    <div>
      <Form />
      <Greeting banana={pro} />
    </div>
  )
}

export default Wrap
