import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      try{
        console.log('dheeraj-in-home.js data: ', data)
        if (data.error) {
          setError(data.error);
        } else {
          setProducts(data);
        }
      }
      catch(err){
        console.log('dheeraj-erro: ', err)
      }
      // console.log('dheeraj-data: ', data)
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="container text-center">
        {/* <div className="row text-center text-white">All of tshirts</div>         */}
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
