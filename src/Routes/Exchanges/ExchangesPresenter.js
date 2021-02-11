import Exchanges from "../../Components/Exchanges";
import Loader from "Components/Loader";

const ExchangesPresenter = ({ exchanges, loading }) => (loading ? <Loader /> : <Exchanges exchanges={exchanges} />);

export default ExchangesPresenter;
