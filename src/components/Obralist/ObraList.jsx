import './ObraList.css'
import { useState, useEffect } from "react";
import { ObraService } from 'services/ObraService';
import ObraListCard from '../ObraListCard/ObraListCard';

const ObraList = () => {
    const [obras, setObras] = useState([])

    const [obraSelecionada, setObraSelecionada] = useState({});



    const addItem = (obraIndex) => {
        const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) + 1 }
        setObraSelecionada({
            ...obraSelecionada, ...obra
        })
    }


    const removeItem = (obraIndex) => {
        const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) - 1 }
        setObraSelecionada({
            ...obraSelecionada, ...obra
        })
        
    }


    const GetList = async () => {
        const response = await ObraService.getList()
        setObras(response)
        
        
    }

    useEffect(() => {
        GetList()
    }, [])




    return (<div className="obra-list">
        

        {obras.map( (obra, index) => 
        

                <ObraListCard obra={obra} 
                quantidadeSelecionada={+(obraSelecionada[index])} 
                index={index} 
                onRemove={Index => removeItem(Index)} 
                onAdd={Index => addItem(Index)} 
                key={`obra-list-item-${index}`} />

            )
        }
    </div>)
}

export default ObraList;