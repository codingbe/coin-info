import coinApi from "api";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import CoinsExchange from "./CoinsExchange";

const CoinsExchanges = ({ id, name }) => {
  const [exchanges, setExchanges] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCoinsExchanges = async (id) => {
    try {
      const { data } = await coinApi.coinsExchanges(id);
      const exchanges = data.filter((exchange) => exchange.fiats.length > 0);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoinsExchanges(id);
  }, [id]);
  return loading ? <Loader /> : <CoinsExchange exchanges={exchanges} name={name} />;
};

export default CoinsExchanges;
