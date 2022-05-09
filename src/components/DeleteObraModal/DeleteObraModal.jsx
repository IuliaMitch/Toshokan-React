import './DeleteObraModal.css'
import Modal from 'components/Modal/Modal'
import { ObraService } from 'services/ObraService'

const DeleteObraModal = ({ closeModal, obraForDelete, onDelete }) => {
    const handleDelete = async (obra) => {
        await ObraService.deleteById(obra._id);
        onDelete(obra);
        closeModal();
    }



return (
    <Modal closeModal={closeModal}>
        <div className='delete-obra-modal'>
            <h2>Confirmação</h2>
            <p>
                Você realmente deseja remover <b>{obraForDelete.nome}</b> da Biblioteca?
            </p>

            <img className='delete-obra-modal-foto' src={obraForDelete.foto} alt={obraForDelete.nome} />

            <br />

            <div>
                <button
                    onClick={() => handleDelete(obraForDelete)}
                    className="delete-obra-modal-confirmar"
                
                >
                    {" "}
                    Confirmar{" "}
                </button>
                <button onClick={closeModal} className="delete-obra-modal-cancelar">
                    {" "}
                    Cancelar{" "}
                </button>
            </div>

        </div>

    </Modal>
)

};

export default DeleteObraModal;