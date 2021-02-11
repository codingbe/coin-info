import PricesPresenter from "./PricesPresenter";
import React from "react";
import coinApi from "api";

export default class PricesContainer extends React.Component {
  state = {
    tickers: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data } = await coinApi.tickers();
      const tickers = data.filter((ticker) => ticker.rank <= 300);
      this.setState({ tickers });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { tickers, loading } = this.state;
    return <PricesPresenter prices={tickers} loading={loading} />;
  }
}
