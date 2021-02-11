import coinApi from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class DetailContainer extends React.Component {
  state = {
    coin: null,
    loading: true,
  };
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data: coin } = await coinApi.detail(id);
      this.setState({ coin });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { coin, loading } = this.state;
    return <DetailPresenter coin={coin} loading={loading} />;
  }
}
