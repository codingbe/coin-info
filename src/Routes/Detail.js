import coinApi from "api";
import DetailPresenter from "Components/DetailPresenter";
import Loader from "Components/Loader";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const Detail = ({
  match: {
    params: { id },
  },
}) => {
  const [coin, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDetail = async (id) => {
    try {
      const { data: coin } = await coinApi.detail(id);
      setCoins(coin);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetail(id);
  }, [id]);
  return loading ? <Loader /> : <DetailPresenter coin={coin} />;
};

export default withRouter(Detail);
