import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", event => {
      if (event.code === "Escape") {
        closeModal();
      }
    });
  });

  const closeBackdrop = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <div onClick={closeBackdrop} className="Overlay">
      <div className="Modal">{children}</div>
    </div>,
    document.querySelector("#modal-root")
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
