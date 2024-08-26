import React, { useEffect } from 'react';
import './Modal.css';
// Composant Modal qui prend les props définies par ModalProps
var Modal = function (_a) {
    var isOpen = _a.isOpen, // État indiquant si la modal est ouverte ou fermée
    onClose = _a.onClose, // Fonction qui sera appelée pour fermer la modal
    children = _a.children, // Contenu à afficher à l'intérieur de la modal
    _b = _a.size, // Contenu à afficher à l'intérieur de la modal
    size = _b === void 0 ? 'medium' : _b, // Taille de la modal, par défaut 'medium'
    closeIcon = _a.closeIcon, // Icône optionnelle pour le bouton de fermeture
    _c = _a.customStyles, // Icône optionnelle pour le bouton de fermeture
    customStyles = _c === void 0 ? {} : _c, // Styles personnalisés par défaut à un objet vide
    _d = _a.closeButtonStyles, // Styles personnalisés par défaut à un objet vide
    closeButtonStyles = _d === void 0 ? {} : _d;
    // Utilise un effet pour détecter les touches "Escape" et "Entrée"
    useEffect(function () {
        // Fonction pour gérer les appuis sur les touches
        var handleKeyDown = function (event) {
            // Ferme la modal si "Escape" ou "Enter" est pressé
            if (event.key === 'Escape' || event.key === 'Enter') {
                onClose();
            }
        };
        // Ajoute un écouteur pour l'événement 'keydown' (appui sur une touche)
        document.addEventListener('keydown', handleKeyDown);
        // Nettoyage : retire l'écouteur lorsque le composant est démonté
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]); // Dépendance sur onClose : effet recalculé si onClose change
    // Si la modal n'est pas ouverte, ne rien faire
    if (!isOpen)
        return null;
    // Ajout d'une classe dynamique pour la taille de la modal (petite, moyenne ou grande)
    var modalSizeClass = size ? "modal-".concat(size) : '';
    // Ferme la modal si on clique à l'extérieur du contenu de la modal
    var handleClickOutside = function (e) {
        // Vérifie si l'élément cliqué est la modal elle-même (et non son contenu)
        if (e.target === e.currentTarget) {
            onClose(); // Appelle la fonction onClose pour fermer la modal
        }
    };
    return (
    // Div parent de la modal, applique les styles et gère le clic à l'extérieur
    React.createElement("div", { className: "modal ".concat(modalSizeClass), style: customStyles.modal, onClick: handleClickOutside },
        React.createElement("div", { className: "modal-content", style: customStyles.modalContent },
            React.createElement("span", { className: "modal-close-button", onClick: onClose, style: closeButtonStyles }, closeIcon ? React.createElement("img", { src: closeIcon, alt: "Close" }) : '×'),
            React.createElement("div", { className: "modal-body", style: customStyles.body }, children))));
};
export default Modal;
