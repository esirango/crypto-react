import React from "react";

//styles
import styles from "./Coin.module.css";

const Coin = ({ image, name, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="icon of crypto" />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>{price.toLocaleString()}</span>
      <span className={priceChange < 0 ? styles.redPrice : styles.greenPrice}>
        {priceChange.toFixed(2)}
      </span>
      <span className={styles.marketCap}>{marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
