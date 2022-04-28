import star from '../../assets/icons/star.svg'
import './ObraList.css'
import { obras } from "../../mocks/obra"
import React, { useState } from "react";

const ObraList = () => {

    const [obraSelecionada, setObraSelecionada] = useState({});

    const addItem = (obraIndex) => {
        const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) +1 }
        setObraSelecionada({
            ...obraSelecionada, ...obra
        })
    }

    
    const removeItem = (obraIndex) => {
        const obra = {[obraIndex]: Number(obraSelecionada[obraIndex] || 0) - 1}
        setObraSelecionada({
            ...obraSelecionada, ...obra
        })
    }

    const badgeCounter = (canRender, index) => Boolean(canRender) && (<span className="obra-list-item-badge"> {obraSelecionada[index]}</span>)
    const buttonRemove = (canRender, index) => Boolean(canRender) && (<button className='actions-remove' onClick={() => removeItem(index)}>Remover</button>)

    return ( <div className="obra-list">
        {obras.map((obra, index) =>
            <div className="obra-list-item" key={`obra-list-item-${index}`}>
                {badgeCounter(obraSelecionada[index], index)}
                <div>
                    <div className="obra-list-item-nome">{obra.nome}</div>
                    <div className="obra-list-item-nota">
                        {obra.nota}
                        <img src={star} alt="estrela" width="14px" />

                    </div>
                    <div className="obra-list-item-sinopse">
                        {obra.sinopse}
                    </div>
                    <div class="obra-list-item-actions actions">
                        <button className={`actions-add ${!obraSelecionada[index] && "btn"}`} onClick={() => addItem(index)}> Adicionar </button>
                        {
                            buttonRemove(obraSelecionada[index], index)
                        }
                    </div>
                </div>
                <img
                    src={obra.foto}
                    alt={`Obra ${obra.nome}`}
                    className="obra-list-item-foto"
                />

            </div>
        )}
    </div>)
}

export default ObraList;