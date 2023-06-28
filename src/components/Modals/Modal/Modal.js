import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children, className }) => {
  const clss = classNames("modal-content", {}, className);

  const modalRef = useRef(null);

  const closeModal = e => {
    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div
          className={clss}
          onClick={e => e.stopPropagation()}
          ref={modalRef}
        >
          <button
            className="close-button"
            onClick={closeModal}
          >
            Close
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
