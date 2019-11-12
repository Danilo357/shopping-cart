import React, { useEffect, useState } from "react"
import { useShopping } from "../Redux/ducks/shopping"
import Icon from "../lib/Icon"

export default function(props) {
  const { shop, toggle } = useShopping()
  useEffect(() => {})
  const { add } = useShopping()
  const [shops, setShops] = useState("")
  function handleClick(e) {
    e.preventDefault()

    // add(shops)
    add("")
    // setShops("")
  }
  return (
    <div>
      <header className="head">
        <p className="triangle"></p>
        <p className="githubb">
          <Icon icon="github" />
        </p>
        <p className="cartpluss">
          <Icon icon="cart-plus" />
        </p>
      </header>
      <div className="lefttop">
        <p className="naslov"></p>
        <div className="order">
          <p className="by">Order by:</p>
          <select className="orderby">
            <option value="Select">Select</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
            <option value="Highest to Lowest">Highest to Lowest</option>
          </select>
        </div>
      </div>

      <div className="finalwrap">
        <div className="leftside">
          <p className="naslov">Sizes:</p>
          <div>
            <button type="button" className="size">
              XS
            </button>
            <button type="button" className="size">
              S
            </button>
            <button type="button" className="size">
              M
            </button>
            <button type="button" className="size">
              ML
            </button>

            <p></p>

            <button type="button" className="size">
              L
            </button>
            <button type="button" className="size">
              XL
            </button>
            <button type="button" className="size">
              XXL
            </button>
          </div>
          <div className="leaveastar">
            Leave a star on Github if this
            <br />
            repository was useful :)
          </div>
          <div className="starwrap">
            <button className="star" type="text" placeholder="fa fa-star">
              Star
            </button>
            <button className="counter" type="button">
              941
            </button>
          </div>
        </div>
        <div className="wrapping">
          {props.banana.map(item => (
            <div className="omot">
              <p className={item.isFreeShipping === true ? "free" : "notfree"}>
                Free Shipping
              </p>
              <img src={`assets/${item.sku}_1.jpg`} />
              <p>{item.title}</p>
              <p>
                {item.currencyFormat}&nbsp;
                {item.price}
              </p>

              <p>
                {`${item.installments} payments of ${item.currencyFormat} ${(
                  item.price / item.installments
                ).toFixed(2)}`}
              </p>
              <p>{item.isFreeShipping}</p>

              <div className="container">
                <div className="wrap">
                  <form>
                    <button
                      placeholder="Add to cart"
                      className="inputt"
                      type="text"
                      onClick={e => handleClick(e, item.id)}
                      value={shops}
                    >
                      Add to cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightside"></div>
      </div>
    </div>
  )
}
