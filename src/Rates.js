import React from "react";
import { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";

const Rates = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("there is an error"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="coinSearch">
        <h1>Search a coin</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            coinName={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            change={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};

export default Rates;
