import star from '../assets/icons/star.svg'
import '../ObraList.css'
import { obras } from "../mocks/obra.js"

const ObraList = () => {

    const [obraSelecionada, setObraSelecionada] = useState({});

    const addItem = (obraIndex) => {
        const obra = { [obraIndex]: Number(obraSelecionada[obraIndex] || 0) +1 }
        setObraSelecionada({
            ...obraSelecionada, ...obra
        })
    }

    return (<div className="obra-list">
        { obras.map((obra, index) => 
            <div className="obra-list-item" key={`obra-list-item-${index}`}>
                <span className="obra-list-item-bagde">{obraSelecionada[index] || 0}</span>
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
                    <button className="actions-editar btn" onClick={() => addItem(index)} > Adicionar </button>

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