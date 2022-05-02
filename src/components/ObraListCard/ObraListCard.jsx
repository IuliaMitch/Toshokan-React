import "./ObraListCard.css";
import star from "../../assets/icons/star.svg";

const ObraListCard = ({
  obra,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) => {
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="obra-list-item-badge"> {quantidadeSelecionada}</span>
    );
  const buttonRemove = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="actions-remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        Remover
      </button>
    );

  return (
    <div className="obra-list-item"  onClick={() => clickItem(obra._id)}>
      {badgeCounter(quantidadeSelecionada)}
      <div>
        <div className="obra-list-item-nome">{obra.nome}</div>
        <div className="obra-list-item-nota">
          {obra.nota}
          <img src={star} alt="estrela" width="14px" />
        </div>
        <div className="obra-list-item-sinopse">{obra.sinopse}</div>
        <div className="obra-list-item-actions actions">
          <button
            className={`actions-add ${!quantidadeSelecionada && "btn"}`}
            onClick={(e) => { e.stopPropagation(); onAdd(index)}}
          >
            {" "}
            Adicionar{" "}
          </button>
          {buttonRemove(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        src={obra.foto}
        alt={`Obra ${obra.nome}`}
        className="obra-list-item-foto"
      />
    </div>
  );
};

export default ObraListCard;
