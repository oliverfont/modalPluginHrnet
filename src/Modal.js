import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="modal-close-button" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
