import "./ObraList.css";
import { useState, useEffect, useCallback } from "react";
import { ObraService } from "services/ObraService";
import ObraListCard from "../ObraListCard/ObraListCard";
import ObrasDetail from "../ObrasDetail/ObrasDetail";
import { ActionMode } from "constants/index";


const ObraList = ({ createdObra, mode, updatedObra, deletedObra }) => {
  const [obras, setObras] = useState([]);

  const [obraSelecionada, setObraSelecionada] = useState({});

    const [obrasModal, setObrasModal] = useState(false)

  const addItem = (obraIndex) => {
    const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) + 1 };
    setObraSelecionada({
      ...obraSelecionada,
      ...obra,
    });
  };

  const removeItem = (obraIndex) => {
    const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) - 1 };
    setObraSelecionada({
      ...obraSelecionada,
      ...obra,
    });
  };

  const GetList = async () => {
    const response = await ObraService.getList();
    setObras(response);
  };

  const getObraById = async (obraId) => {
      const response = await ObraService.getById(obraId)
      setObrasModal(response);

      const mapper = {
        [ActionMode.NORMAL]: () => setObrasModal(response),
        [ActionMode.ATUALIZAR]: () => updatedObra(response),
        [ActionMode.DELETAR]: () => deletedObra(response)
      }
    
      mapper[mode]();

  }



  const addObra = useCallback((obra) => {
    const list = [...obras, obra]
    setObras(list)
  }, [obras]);

  useEffect(() => {
    if(createdObra && !obras.map(({id}) => id).includes(createdObra._id)){ 
      addObra(createdObra);
    }
  }, [addObra, createdObra, obras])

  useEffect(() => {
    GetList();
  }, []);




  return (
    <div className="obra-list" >
      {obras.map((obra, index) => (
        <ObraListCard
          mode={mode}
          obra={obra}
          quantidadeSelecionada={+obraSelecionada[index]}
          index={index}
          onRemove={(Index) => removeItem(Index)}
          onAdd={(Index) => addItem(Index)}
          key={`obra-list-item-${index}`}
          clickItem={(obraId) => getObraById(obraId)} />
        
      ))}

        
 
       {obrasModal && <ObrasDetail obra={obrasModal} closeModal={() => setObrasModal(false)}/>} 
    

    </div>
  );
};

export default ObraList;
    