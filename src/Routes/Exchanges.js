import React, { useEffect, useState } from "react";
import coinApi from "api";
import Loader from "Components/Loader";
import Exchange from "Components/Exchange";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState(null);
  const [loading, setLoading] = useState(true);

  const getExchanges = async () => {
    try {
      const { data } = await coinApi.exchanges();
      const exchanges = data.filter((exchange) => exchange.description && exchange.links);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExchanges();
  }, []);
  return loading ? <Loader /> : <Exchange exchanges={exchanges} />;
};

export default Exchanges;
