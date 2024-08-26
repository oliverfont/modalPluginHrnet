import React, { ReactNode, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;               // Indique si la modal est ouverte
  onClose: () => void;           // Fonction pour fermer la modal
  children: ReactNode;           // Contenu à afficher dans la modal
  size?: 'small' | 'medium' | 'large';  // Taille optionnelle de la modal
  closeIcon?: string;            // Icône personnalisée pour fermer la modal
  customStyles?: {               // Styles personnalisés pour la modal
    modal?: React.CSSProperties;
    modalContent?: React.CSSProperties;
    body?: React.CSSProperties;
  };
  closeButtonStyles?: React.CSSProperties;  // Styles personnalisés pour le bouton de fermeture
}

// Composant Modal qui prend les props définies par ModalProps
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  size = 'medium',                // Valeur par défaut pour la taille de la modal
  closeIcon,
  customStyles = {},              // Valeurs par défaut pour les styles
  closeButtonStyles = {},
}) => {
  
  // Fermer la modal avec les touches "Escape" ou "Entrée"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        onClose();                // Appelle onClose lorsque "Escape" ou "Entrée" est pressé
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);  // Ajoute l'écouteur de touches

    return () => {
      document.removeEventListener('keydown', handleKeyDown);  // Retire l'écouteur lors du démontage
    };
  }, [onClose]);

  if (!isOpen) return null;  // Ne rien afficher si la modal est fermée

  const modalSizeClass = `modal-${size}`;  // Classe CSS dynamique basée sur la taille

  // Ferme la modal si on clique en dehors de son contenu
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();  // Appelle onClose si on clique en dehors du contenu
    }
  };

  return (
    <div className={`modal ${modalSizeClass}`} style={customStyles.modal} onClick={handleClickOutside}>
      <div className="modal-content" style={customStyles.modalContent}>
        <span className="modal-close-button" onClick={onClose} style={closeButtonStyles}>
          {closeIcon ? <img src={closeIcon} alt="Close" /> : '×'}
        </span>
        <div className="modal-body" style={customStyles.body}>
          {children}  {/* Affiche le contenu de la modal */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
