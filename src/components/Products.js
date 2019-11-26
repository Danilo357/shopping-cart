import React from "react";
import { useProducts, useCart } from "../hooks";
import "../styles/products.css";
import Icon from "../lib/Icon";
export default props => {
  const { products, sizes, filter } = useProducts();
  const { open, add } = useCart();

  function handleAdd(e, product) {
    e.preventDefault();
    add(product);
    open();
  }

  return (
    <div>
      <header className="naslov">
        <p className="triangle"></p>
        <p className="githubb">
          <Icon icon="github" />
        </p>
      </header>
      <div className="naslov">
        <div className="order">
          <p className="by">Order by:</p>
          <select className="orderby">
            <option value="Select">Select</option>
            <option value="Lowest to Highest">Lowest to Highest</option>
            <option value="Highest to Lowest">Highest to Lowest</option>
          </select>
        </div>
      </div>

      <div className="foo">
        <br />
        <p className="naslov">Sizes:</p>
        <div className="naslov">
          {sizes.map((size, i) => (
            <button className="buttons" key={i} onClick={e => filter(size)}>
              {size}
            </button>
          ))}
        </div>
        <br />

        <div className="naslov">
          Leave a star on Github if this
          <br />
          repository was useful :)
        </div>
        <div className="naslov">
          <button className="star" type="text" placeholder="">
            <Icon icon="star" />
            Star
          </button>
          <button className="counter" type="button">
            941
          </button>
        </div>

        <div className="products">
          {products.map(product => {
            const {
              isFreeShipping: free,
              sku,
              title,
              price,
              installments
            } = product;

            const dollars = price.toString().split(".")[0];
            const cents = price
              .toFixed(2)
              .toString()
              .split(".")[1];

            return (
              <div key={"product" + product.id} className="product">
                {free ? <div className="shipping">Free shipping</div> : ""}
                <img src={`/assets/${sku}_1.jpg`} alt={title} />
                <p className="title">{title}</p>
                <hr />
                <div className="price">
                  <p>
                    $<span className="dollar">{dollars}</span>.{cents}
                  </p>
                  {installments ? (
                    <p className="installments">
                      {" "}
                      or {installments} x{(price / installments).toFixed(2)}
                    </p>
                  ) : (
                    <p className="installments">&nbsp;</p>
                  )}
                </div>
                <button onClick={e => handleAdd(e, product)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
