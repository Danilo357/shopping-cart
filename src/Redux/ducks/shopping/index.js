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
  const add = shops => disp(addToCart(shops))
  const remove = id => disp(removeFromCart(id))
  const fetch = () => disp(data())
  useEffect(() => {
    fetch()
  }, [])
  return { pro, add, remove, fetch }
}

//call for data

function data() {
  return any => {
    axios.get("/products").then(response => {
      any({
        type: list_items,
        payload: response.data
      })
    })
  }
}

function addToCart(shops) {
  return dispatch => {
    axios.post("/products", { title: shops, completed: false }).then(resp => {
      dispatch(data())
    })
  }
}

function removeFromCart(id) {
  return dispatch => {
    axios.delete("/products/" + id).then(resp => {
      dispatch(data())
    })
  }
}
