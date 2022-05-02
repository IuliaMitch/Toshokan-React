import "./Modal.css";
import Overlay from "../Overlay/Overlay";

const Modal = ({ children, closeModal }) => {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
  <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={handleClick}>
          <span className="Modal-close" onClick={e => handleClick(e, true)}>
              +
          </span>
          <div className="Modal-body">{children}</div>
      </div>
  
  </Overlay>
  );
};

export default Modal;
