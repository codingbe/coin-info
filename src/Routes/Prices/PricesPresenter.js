import Loader from "Components/Loader";
import Price from "Components/Price";

const PricesPresenter = ({ loading, prices }) => (loading ? <Loader /> : <Price prices={prices} />);

export default PricesPresenter;
