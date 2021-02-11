import Loader from "Components/Loader";
import Coins from "Components/Coins";

const CoinsPresenter = ({ coins, loading }) => (loading ? <Loader /> : <Coins coins={coins} />);

export default CoinsPresenter;
