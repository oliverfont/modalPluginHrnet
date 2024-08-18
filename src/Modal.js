import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  size, 
  closeIcon, 
  customStyles, 
  closeButtonStyles 
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

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    closeIcon: PropTypes.string,
    customStyles: PropTypes.shape({
      modal: PropTypes.object,
      modalContent: PropTypes.object,
      title: PropTypes.object,
      body: PropTypes.object,
    }),
    closeButtonStyles: PropTypes.object,
    children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
    title: '',
    size: 'medium',
    closeIcon: '',
    customStyles: {
      modal: {},
      modalContent: {},
      title: {},
      body: {}
    },
    closeButtonStyles: {}
};

export default Modal;
