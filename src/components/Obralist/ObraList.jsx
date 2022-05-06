import "./ObraList.css";
import { useState, useEffect } from "react";
import { ObraService } from "services/ObraService";
import ObraListCard from "../ObraListCard/ObraListCard";
import ObrasDetail from "../ObrasDetail/ObrasDetail";

const ObraList = ({ createdObra }) => {
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

  }

  const addObra = (obra) => {
    const list = [...obras, obra]
    setObras(list)
  };

  useEffect(() => {
    if(createdObra) addObra(createdObra);
  }, [createdObra])

  useEffect(() => {
    GetList();
  }, []);




  return (
    <div className="obra-list" >
      {obras.map((obra, index) => (
        <ObraListCard
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
    