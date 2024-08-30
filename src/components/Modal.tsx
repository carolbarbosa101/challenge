import React from 'react';

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{message}</h3>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;