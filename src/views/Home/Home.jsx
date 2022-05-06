import "./Home.css";
import ObraList from "../../components/Obralist/ObraList";
import Header from "../Header/Header";
import SubmitObraModal from "components/SubmitObraModal/submitObraModal";
import Player from "../Header/player";
import { useState } from "react";


const Home = () => {
  const [canShowAddModal, setCanShowAddModal] = useState(false)

  const [obraToAdd, setObraToAdd] = useState();
 

  return (
    <div className="Home">
      <Player/>
      <Header createObra={() => setCanShowAddModal(true)} />
      <div className="Home-container">
        <ObraList createdObra={obraToAdd}/>
        {
          canShowAddModal && 
          (<SubmitObraModal onCreateObra={(obra) => setObraToAdd(obra)} closeModal={() => setCanShowAddModal(false)}/>)
        }
      </div>
    </div>
  );
};

export default Home;
