import ExchangesPresenter from "./ExchangesPresenter";
import React from "react";
import coinApi from "api";

export default class ExchangesContainer extends React.Component {
  state = {
    exchanges: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const { data } = await coinApi.exchanges();
      const exchanges = data.filter((exchange) => exchange.description && exchange.links);
      this.setState({ exchanges });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { exchanges, loading } = this.state;
    return <ExchangesPresenter exchanges={exchanges} loading={loading} />;
  }
}
