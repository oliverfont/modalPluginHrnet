import React, { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  closeIcon?: string;
  customStyles?: {
    modal?: React.CSSProperties;
    modalContent?: React.CSSProperties;
    title?: React.CSSProperties;
    body?: React.CSSProperties;
  };
  closeButtonStyles?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium',
  closeIcon,
  customStyles = {},
  closeButtonStyles = {},
}) => {
  if (!isOpen) return null;

  const modalSizeClass = size ? `modal-${size}` : '';

  return (
    <div className={`modal ${modalSizeClass}`} style={customStyles.modal}>
      <div className="modal-content" style={customStyles.modalContent}>
        <span
          className="modal-close-button"
          onClick={onClose}
          style={closeButtonStyles}
        >
          {closeIcon ? <img src={closeIcon} alt="Close" /> : '×'}
        </span>
        <div className="modal-body" style={customStyles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
