import React from 'react';
import './Modal.css';
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, closeIcon = _a.closeIcon, _c = _a.customStyles, customStyles = _c === void 0 ? {} : _c, _d = _a.closeButtonStyles, closeButtonStyles = _d === void 0 ? {} : _d;
    if (!isOpen)
        return null;
    var modalSizeClass = size ? "modal-".concat(size) : '';
    return (React.createElement("div", { className: "modal ".concat(modalSizeClass), style: customStyles.modal },
        React.createElement("div", { className: "modal-content", style: customStyles.modalContent },
            React.createElement("span", { className: "modal-close-button", onClick: onClose, style: closeButtonStyles }, closeIcon ? React.createElement("img", { src: closeIcon, alt: "Close" }) : '×'),
            React.createElement("div", { className: "modal-body", style: customStyles.body }, children))));
};
export default Modal;
