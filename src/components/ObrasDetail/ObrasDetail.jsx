import "./ObrasDetail.css";
import Modal from "../Modal/Modal";
import star from "../../assets/icons/star.svg"

const obrasDetail = ({obra, closeModal}) => {
    const possuiAnime = (canRender) => Boolean(canRender) ? (<p>SIM</p>) : (<p>NÃO</p>)

  return (
    <Modal closeModal={closeModal}>
      <div className="obras-card-item" >
        <div>
          <div className="obras-card-item-nome">{obra.nome}</div>
          <div className="obras-card-item-nota">R$ {+(obra.preco)}</div>
          <div className="obras-card-item-sinopse"><b>Sinopse: </b>{obra.sinopse}</div>
          <div className="obras-card-item-sinopse">
            <b>Possui Anime: </b>{possuiAnime(obra.possuiAnime)}
          </div>
          <div className="obras-card-item-sinopse">Nota: {obra.nota} <img src={star} alt="estrela" width="14px"/></div>
        </div>
        <img src={obra.foto} alt={`Obra ${obra.nome}`} className="obras-card-item-foto"/>
      </div>
    </Modal>
  );
};

export default obrasDetail;
