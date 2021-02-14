import React, { useEffect, useState } from "react";
import coinApi from "api";
import Loader from "./Loader";
import Markets from "./Markets";

const CoinsMarkets = ({ id, name }) => {
  const [markets, setMarkets] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCoinMarket = async (id) => {
    try {
      const { data } = await coinApi.markets(id);
      const markets = data.filter(
        (market) => market.market_url && market.trust_score === "high" && market.adjusted_volume_24h_share >= 0.005
      );
      setMarkets(markets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoinMarket(id);
  }, [id]);
  return loading ? <Loader /> : <Markets markets={markets} name={name} />;
};

export default CoinsMarkets;
