import { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//action name

const list_items = "items"

//reducer

const initialState = {
  product: []
}

export default function reducer(anything = initialState, action) {
  switch (action.type) {
    case list_items:
      return {
        ...anything,
        product: action.payload
      }
    default:
      return anything
  }
}

//custom hook

export function usePotato() {
  const disp = useDispatch()
  const pro = useSelector(whatState => whatState.Reducer.product)
  const fetch = () => disp(data())
  useEffect(() => {
    fetch()
  }, [])
  return { pro }
}

//call for data

function data() {
  return any => {
    axios.get("/products").then(response => {
      console.log(response.data)
      any({
        type: list_items,
        payload: response.data
      })
    })
  }
}
