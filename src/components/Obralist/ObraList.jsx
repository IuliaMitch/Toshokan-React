import './ObraList.css'
import { obras } from "../../mocks/obra"
import React, { useState } from "react";
import ObraListCard from '../ObraListCard/ObraListCard';

const ObraList = () => {

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


    return (<div className="obra-list">
        {
            obras.map((obra, index) => 
                <ObraListCard obra={obra} quantidadeSelecionada={obraSelecionada[index]} index={index} key={`obra-list-item-${index}`}/>
            )
        }
    </div>)
}

export default ObraList;