import React from "react";

const Coin = ({ image, coinName, symbol, price, change }) => {
  return (
    <>
      <div>
        <div className="coin">
          <img src={image} alt="coin" />
          <h1>{coinName}</h1>
          <p>{symbol}/NGN</p>
        </div>
        <div className="fff">
          <p>{price} NGN</p>
          <p>{change}%</p>
        </div>
      </div>
    </>
  );
};

export default Coin;
