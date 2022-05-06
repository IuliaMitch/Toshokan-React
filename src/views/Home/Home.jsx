import "./Home.css";
import ObraList from "../../components/Obralist/ObraList";
import Header from "../Header/Header";
import SubmitObraModal from "components/SubmitObraModal/submitObraModal";
import Player from "../Header/player";
import { useState } from "react";
import { ActionMode } from "constants/index";


const Home = () => {
  const [canShowAddModal, setCanShowAddModal] = useState(false)

  const [obraToAdd, setObraToAdd] = useState();

  const [atualMode, setAtualMode] = useState(ActionMode.NORMAL);

  const [obraForUpdate, setObraForUpdate] = useState();
  const [obraForDelete, setObraForDelete] = useState();

  const handleDelete = (obraToDelete) => {
    setObraForDelete(obraToDelete);
  }

  const handleUpdate = (obraToUpdate) => {
    setObraForUpdate(obraToUpdate);
    setCanShowAddModal(true);
  }

  const handleActions = (action) => {
    const newAction = atualMode === action ? ActionMode.NORMAL : action;
    setAtualMode(newAction);
  }

  const handleCloseModal = () => {
    setCanShowAddModal(false);
    setObraForDelete()
    setObraForUpdate()
    setObraToAdd()
  }
 

  return (
    <div className="Home">
      <Player/>
      <Header 
        mode={atualMode}
        createObra={() => setCanShowAddModal(true)} 
        updateObra={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home-container">
        <ObraList
          updatedObra={handleUpdate}
          deletedObra={handleDelete} 
          createdObra={obraToAdd}
          mode={atualMode}
        />
        {
          canShowAddModal && 
          (<SubmitObraModal 
            mode={atualMode}
            onCreateObra={(obra) => setObraToAdd(obra)} 
            closeModal={handleCloseModal}
            obraToUpdate={obraForUpdate}
            />)
        }
      </div>
    </div>
  );
};

export default Home;
