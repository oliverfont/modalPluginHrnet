"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children,
    size = _ref.size,
    closeIcon = _ref.closeIcon,
    customStyles = _ref.customStyles,
    closeButtonStyles = _ref.closeButtonStyles;
  if (!isOpen) return null;
  var modalSizeClass = size ? "modal-".concat(size) : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal ".concat(modalSizeClass),
    style: customStyles.modal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    style: customStyles.modalContent
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "modal-close-button",
    onClick: onClose,
    style: closeButtonStyles
  }, closeIcon ? /*#__PURE__*/_react["default"].createElement("img", {
    src: closeIcon,
    alt: "Close"
  }) : '×'), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-body",
    style: customStyles.body
  }, children)));
};
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  closeIcon: _propTypes["default"].string,
  customStyles: _propTypes["default"].shape({
    modal: _propTypes["default"].object,
    modalContent: _propTypes["default"].object,
    title: _propTypes["default"].object,
    body: _propTypes["default"].object
  }),
  closeButtonStyles: _propTypes["default"].object,
  children: _propTypes["default"].node.isRequired
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
var _default = exports["default"] = Modal;