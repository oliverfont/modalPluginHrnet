import React, { useEffect } from 'react';
import './Modal.css';
// Composant Modal qui prend les props définies par ModalProps
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, // Valeur par défaut pour la taille de la modal
    closeIcon = _a.closeIcon, _c = _a.customStyles, customStyles = _c === void 0 ? {} : _c, // Valeurs par défaut pour les styles
    _d = _a.closeButtonStyles, // Valeurs par défaut pour les styles
    closeButtonStyles = _d === void 0 ? {} : _d;
    // Fermer la modal avec les touches "Escape" ou "Entrée"
    useEffect(function () {
        var handleKeyDown = function (event) {
            if (event.key === 'Escape' || event.key === 'Enter') {
                onClose(); // Appelle onClose lorsque "Escape" ou "Entrée" est pressé
            }
        };
        document.addEventListener('keydown', handleKeyDown); // Ajoute l'écouteur de touches
        return function () {
            document.removeEventListener('keydown', handleKeyDown); // Retire l'écouteur lors du démontage
        };
    }, [onClose]);
    if (!isOpen)
        return null; // Ne rien afficher si la modal est fermée
    var modalSizeClass = "modal-".concat(size); // Classe CSS dynamique basée sur la taille
    // Ferme la modal si on clique en dehors de son contenu
    var handleClickOutside = function (e) {
        if (e.target === e.currentTarget) {
            onClose(); // Appelle onClose si on clique en dehors du contenu
        }
    };
    return (React.createElement("div", { className: "modal ".concat(modalSizeClass), style: customStyles.modal, onClick: handleClickOutside },
        React.createElement("div", { className: "modal-content", style: customStyles.modalContent },
            React.createElement("span", { className: "modal-close-button", onClick: onClose, style: closeButtonStyles }, closeIcon ? React.createElement("img", { src: closeIcon, alt: "Close" }) : '×'),
            React.createElement("div", { className: "modal-body", style: customStyles.body },
                children,
                "  "))));
};
export default Modal;
