import React, { useEffect, useState } from "react";
import coinApi from "api";
import Loader from "Components/Loader";
import Coin from "Components/Coin";

const Coins = () => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCoins = async () => {
    try {
      const { data } = await coinApi.coins();
      const coins = data.filter((coin) => coin.rank > 0 && coin.rank <= 300);
      setCoins(coins);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);
  return loading ? <Loader /> : <Coin coins={coins} />;
};

export default Coins;
