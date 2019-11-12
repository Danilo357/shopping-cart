import React, { useState } from "react"
import { useShopping, useCart } from "../Redux/ducks/shopping"

export default function(props) {
  const { add, cart } = useShopping()
  const [shops, setShops] = useState("")
  const { items } = useCart()

  console.log(items)

  function handleClick(e) {
    e.preventDefault()
    add(shops)
    setShops("")
  }

  return (
    <div className="cd">
      <div>
        Shopping cart
        {items.map(item => (
          <p>{item.id}</p>
        ))}
      </div>
    </div>
  )
}
