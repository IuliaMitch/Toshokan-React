import "./Home.css";
import ObraList from "../../components/Obralist/ObraList";
import Header from "../Header/Header";
import SubmitObraModal from "components/SubmitObraModal/submitObraModal";
import Player from "../Header/player";
import DeleteObraModal from "components/DeleteObraModal/DeleteObraModal";
import { useState } from "react";
import { ActionMode } from "constants/index";


const Home = () => {
  const [canShowAddModal, setCanShowAddModal] = useState(false)
  const [obraToAdd, setObraToAdd] = useState();
  const [atualMode, setAtualMode] = useState(ActionMode.NORMAL);
  const [obraForUpdate, setObraForUpdate] = useState();
  const [obraForDelete, setObraForDelete] = useState();
  const [editedObra, setEditedObra] = useState();
  const [removedObra, setRemovedObra] = useState()


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

    setAtualMode(ActionMode.NORMAL);
  }
 

  return (
    <div className="Home">
      <Player/>
      <Header 
        mode={atualMode}
        removedObra={removedObra}
        createObra={() => setCanShowAddModal(true)} 
        deleteObra={() => handleActions(ActionMode.DELETAR)}
        updateObra={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home-container">
        <ObraList
          updatedObra={handleUpdate}
          deletedObra={handleDelete} 
          createdObra={obraToAdd}
          editedObra={editedObra}
          mode={atualMode}
        />
        {
          canShowAddModal && 
          (<SubmitObraModal 
            mode={atualMode}
            onCreateObra={(obra) => setObraToAdd(obra)} 
            closeModal={handleCloseModal}
            obraToUpdate={obraForUpdate}
            onUpdateObra={(obra) => setEditedObra(obra)}
    
            />)
        }
        {
          obraForDelete &&
          <DeleteObraModal
            obraForDelete={obraForDelete}
            closeModal={handleCloseModal}
            onDelete={(obra) => setRemovedObra(obra)}
          
          />
        }
      </div>
    </div>
  );
};

export default Home;
