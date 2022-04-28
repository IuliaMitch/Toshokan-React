import './ObraListCard.css'
import star from '../../assets/icons/star.svg'




const ObraListCard = ({obra, quantidadeSelecionada, index}) => {


    const removeItem = (i) => console.log('remover' + i);
	const addItem = (i) => console.log('adicionar' + i);


    const badgeCounter = (canRender, index) => Boolean(canRender) && (<span className="obra-list-item-badge"> {quantidadeSelecionada[index]}</span>)
    const buttonRemove = (canRender, index) => Boolean(canRender) && (<button className='actions-remove' onClick={() => removeItem(index)}>Remover</button>)






    return (
        <div className="obra-list-item" key={`obra-list-item-${index}`}>
        {badgeCounter(quantidadeSelecionada[index], index)}
        <div>
            <div className="obra-list-item-nome">{obra.nome}</div>
            <div className="obra-list-item-nota">
                {obra.nota}
                <img src={star} alt="estrela" width="14px" />

            </div>
            <div className="obra-list-item-sinopse">
                {obra.sinopse}
            </div>
            <div className="obra-list-item-actions actions">
                <button className={`actions-add ${!quantidadeSelecionada[index] && "btn"}`} onClick={() => addItem(index)}> Adicionar </button>
                {
                    buttonRemove(quantidadeSelecionada[index], index)
                }
            </div>
        </div>
        <img
            src={obra.foto}
            alt={`Obra ${obra.nome}`}
            className="obra-list-item-foto"
        />

    </div>
    )
}


export default ObraListCard