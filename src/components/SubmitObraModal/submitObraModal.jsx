import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./submitObraModal.css";
import { ObraService } from "services/ObraService";
import { ActionMode } from "constants/index";

const SubmitObraModal = ({ mode, closeModal, onCreateObra, obraToUpdate, onUpdateObra }) => {
  let form = {
    nome: obraToUpdate?.nome ?? '',
    sinopse: obraToUpdate?.sinopse ?? '',
    foto: obraToUpdate?.foto ?? '',
    nota: obraToUpdate?.nota ?? '',
    preco: obraToUpdate?.preco ?? '',
    possuiAnime: obraToUpdate?.possuiAnime ?? '',
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.nome.length &&
        state.nota.length &&
        String(state.preco).length &&
        state.sinopse.length &&
        state.foto.length
    );
    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { nome, foto, preco, nota, possuiAnime, sinopse } = state;

    const obra = {
      ...(obraToUpdate && { _id: obraToUpdate?._id }),
      nome,
      sinopse,
      preco,
      foto: `assets/img/${renomeiaCaminhoFoto(foto)}`,
      possuiAnime,
      nota
    }

    const serviceCall = {
      [ActionMode.NORMAL]: () => ObraService.create(obra),
      [ActionMode.ATUALIZAR]: () => ObraService.updateById(obraToUpdate?._id, obra)
    }

    
    const response = await serviceCall[mode]();

   const actionResponse = {
     [ActionMode.NORMAL]: () => onCreateObra(response),
     [ActionMode.ATUALIZAR]: () => onUpdateObra(response)
   }

   actionResponse[mode]();


   const reset = {
     preco: '',
     nome: '',
     sinopse: '',
     foto: '',
     nota: '',
     possuiAnime: '',
   }


   setState(reset)


    closeModal()

   window.location.reload(true)
  }

  return (
    <Modal closeModal={closeModal}>
      <div className="add-obra-modal">
        <form autoComplete="off">
          <h2>{ ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Cadastrar ??' } Biblioteca</h2>
          <div>
            <label htmlFor="preco" className="add-obra-modal-text">
              Pre??o:
            </label>
            <input
              id="preco"
              type="text"
              placeholder="R$ 20,00"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label htmlFor="nota" className="add-obra-modal-text">
              Nota:
            </label>
            <input
              id="nota"
              type="number"
              placeholder="3.7 (m??ximo 5)"
              value={state.nota}
              onChange={(e) => handleChange(e, "nota")}
              required
            />
          </div>
          <div>
            <label htmlFor="nome" className="add-obra-modal-text">
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Dragon Ball Z"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
              required
            />
          </div>
          <div>
            <label htmlFor="sinopse" className="add-obra-modal-text">
              Sinopse:
            </label>
            <textarea
              id="sinopse"
              type="text"
              placeholder="Resuma a obra"
              value={state.sinopse}
              onChange={(e) => handleChange(e, "sinopse")}
              required
            />
          </div>
          <div>
            <label htmlFor="possuiAnime" className="add-obra-modal-text">
              Possui Anime:
            </label>
            <input
              id="possuiAnime"
              type="text"
              placeholder="SIM"
              value={state.possuiAnime}
              onChange={(e) => handleChange(e, "possuiAnime")}
            />
          </div>
          <div className="foto">
            <label htmlFor="foto" className="add-obra-modal-text label-foto">
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className="add-obra-modal-foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button onClick={handleSend} type="button" disabled={canDisable} className="add-obra-modal-enviar">
            {ActionMode.NORMAL === mode ? 'Enviar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SubmitObraModal;
