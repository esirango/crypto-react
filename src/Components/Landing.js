import React, { useEffect, useState } from "react";

//api
import { getCoins } from "../services/api";

//loader
import Loader from "./Loader";

//components
import Coin from "./Coin";

//styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
        className={styles.input}
      />
      {coins.length ? (
        <div className={styles.container}>
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
