import React, { useEffect, useState } from "react";
import coinApi from "api";
import Loader from "Components/Loader";
import Price from "Components/Price";

const Prices = () => {
  const [tickers, setTickers] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTickers = async () => {
    try {
      const { data } = await coinApi.tickers();
      const tickers = data.filter((ticker) => ticker.rank <= 300);
      setTickers(tickers);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTickers();
  }, []);

  return loading ? <Loader /> : <Price prices={tickers} />;
};

export default Prices;
