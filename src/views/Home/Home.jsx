import "./Home.css";
import ObraList from "../../components/Obralist/ObraList";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Home-container">
        <ObraList />
      </div>
    </div>
  );
};

export default Home;
