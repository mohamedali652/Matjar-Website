import React from "react";
import { Product } from "../../API/API";
const Products = () => {
  return (
    <div>
      <div className="parent-products">
        <h1>منتجاتنا</h1>
        <div className="container-products">
          {Product?.map((e, index) => (
            <div className="card" key={index}>
              <div className="img">
                <img src={e.img} alt="" />
              </div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
