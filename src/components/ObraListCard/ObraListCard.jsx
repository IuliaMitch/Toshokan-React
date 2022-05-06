import "./ObraListCard.css";
import star from "../../assets/icons/star.svg";
import { ActionMode } from "constants/index";

const ObraListCard = ({
  obra,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) => {
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="obra-list-item-badge"> {quantidadeSelecionada}</span>
    );

  const badgeAction = (canRender) => {
    if (canRender) return <span className="obra-list-item-tag"> {mode} </span>;
  };

  const buttonRemove = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
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
    <div
      className={`obra-list-item ${
        mode !== ActionMode.NORMAL && "obra-list-item-disable"
      }`}
      onClick={() => clickItem(obra._id)}
    >
      {badgeCounter(quantidadeSelecionada)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="obra-list-item-nome">{obra.nome}</div>
        <div className="obra-list-item-nota">
          {obra.nota}
          <img src={star} alt="estrela" width="14px" />
        </div>
        <div className="obra-list-item-sinopse">{obra.sinopse}</div>
        <div className="obra-list-item-actions actions">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`actions-add ${!quantidadeSelecionada && "btn"}`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
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
