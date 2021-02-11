import CoinsPresenter from "./CoinsPresenter";
import React from "react";
import coinApi from "api";

export default class CoinsContainer extends React.Component {
  state = {
    coins: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data } = await coinApi.coins();
      const coins = data.filter((coin) => coin.rank > 0 && coin.rank <= 300);
      this.setState({ coins });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { coins, loading } = this.state;
    return <CoinsPresenter coins={coins} loading={loading} />;
  }
}
