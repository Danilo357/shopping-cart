import React, { useEffect } from "react"

export default props => {
  // return( <h1>Greeting: {greeting}</h1>
  useEffect(() => {
    console.log(props)
  })
  return (
    <div className="finalwrap">
      <div className="leftside">
        <p>dddd</p>
        <p>eee</p>
      </div>
      <div className="wrapping">
        {props.banana.map(item => (
          <div>
            <p className={item.isFreeShipping === true ? "free" : "notfree"}>
              Free Shipping
            </p>
            <img src={`assets/${item.sku}_1.jpg`} />
            <p>{item.title}</p>
            <p>
              {item.currencyFormat}&nbsp;
              {item.price}
            </p>
            <p>{item.installments}</p>
            <p>{item.isFreeShipping}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
