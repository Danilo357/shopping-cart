import { useEffect } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

//action name

const list_items = "items"
const shoppingcart = "cart"
//reducer

const initialState = {
  product: [],
  cart: []
}

export default function reducer(anything = initialState, action) {
  switch (action.type) {
    case list_items:
      return {
        ...anything,
        product: action.payload
      }
    case shoppingcart:
      return {
        ...anything,
        cart: action.payload
      }
    default:
      return anything
  }
}

//custom hook

export function useShopping() {
  const disp = useDispatch()
  const pro = useSelector(appState => appState.Reducer.product)
  const cart = useSelector(appState => appState.Reducer.cart)
  const add = shops => disp(addToCart(shops))
  const remove = id => disp(removeFromCart(id))
  const fetch = () => disp(data(), datacart())
  useEffect(() => {
    fetch()
  }, [])
  return { pro, add, remove, fetch, cart }
}

export function useCart() {
  const disp = useDispatch()
  const cart = useSelector(appState => appState.Reducer.cart)
  const products = useSelector(appState => appState.Reducer.product)

  let items = []

  cart.forEach(cartItem => {
    items.push(products.find(prod => prod.id === cartItem.id))
  })

  return { items }
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

function datacart() {
  return any => {
    axios.get("/products").then(response => {
      any({
        type: shoppingcart,
        payload: response.data
      })
    })
  }
}

function addToCart(products) {
  return dispatch => {
    axios.post("/cart").then(resp => {
      dispatch(data)
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
