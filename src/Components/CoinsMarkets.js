import React from "react";
import coinApi from "api";
import Loader from "./Loader";
import Markets from "./Markets";

export default class CoinsMarkets extends React.Component {
  state = {
    markets: null,
    loading: true,
  };
  async componentDidMount() {
    const { id } = this.props;
    try {
      const { data } = await coinApi.markets(id);
      const markets = data.filter((market) => market.market_url && market.trust_score === "high");
      this.setState({ markets });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { markets, loading } = this.state;
    const { name } = this.props;
    return loading ? <Loader /> : <Markets markets={markets} name={name} />;
  }
}
