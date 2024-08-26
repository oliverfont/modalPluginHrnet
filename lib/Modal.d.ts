import React, { ReactNode } from 'react';
import './Modal.css';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: 'small' | 'medium' | 'large';
    closeIcon?: string;
    customStyles?: {
        modal?: React.CSSProperties;
        modalContent?: React.CSSProperties;
        body?: React.CSSProperties;
    };
    closeButtonStyles?: React.CSSProperties;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
