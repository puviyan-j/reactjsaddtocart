import React from "react";

function Prodect({ prodects, addtask }) {
  return (
    <>
      <div className="box">
        {prodects.map((p) => (
          <div key={p.id} className="box1">
            <div className="img_box">
              <img src={p.image} alt={p.title}></img>
            </div>
            <div className="title">
              <p className="title-1">{p.title}</p>
              <h2 className="titlePrice">$ {p.price}</h2>
              <button className="titlebtn" onClick={() => addtask(p)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Prodect;
