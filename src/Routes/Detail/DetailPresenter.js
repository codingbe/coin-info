import Detail from "Components/Detail";
import Loader from "Components/Loader";

const DetailPresenter = ({ loading, coin }) => (loading ? <Loader /> : <Detail coin={coin} />);

export default DetailPresenter;
