import React from 'react';
import Star from "./Star";

function Cards({ data, handleAddCart }) {
  return (
    <div className="col-lg-6 mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.img} style={{ width: "100%", height: "30%" }} className="card-img-top" alt="..." />
        <div className="card-body" style={{ width: "100%", height: "30%", padding:"10px", boxSizing:"-moz-initial"}}>
          <h5 className="card-title" style={{fontSize:"10px"}}>{data.title}</h5>
          <p className="card-text"style={{fontSize:"15px"}}>Rs.{data.price}/-</p>
          <p>{data.author}</p>
       
          <Star />
          <button onClick={() => handleAddCart(data)} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
