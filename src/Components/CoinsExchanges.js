import coinApi from "api";
import React from "react";
import Loader from "./Loader";
import CoinsExchange from "./CoinsExchange";

export default class CoinsExchanges extends React.Component {
  state = { exchanges: null, loading: true };
  async componentDidMount() {
    const { id } = this.props;
    try {
      const { data } = await coinApi.coinsExchanges(id);
      const exchanges = data.filter((exchange) => exchange.fiats.length > 0);
      this.setState({ exchanges });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { exchanges, loading } = this.state;
    const { name } = this.props;
    return loading ? <Loader /> : <CoinsExchange exchanges={exchanges} name={name} />;
  }
}
