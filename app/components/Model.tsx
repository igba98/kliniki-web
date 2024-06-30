import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

    
  return (
    <div
      className={`fixed inset-0 flex items-start justify-end bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="h-full w-1/2 overflow-auto bg-white p-4"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          // Custom scrollbar styling:
          scrollbarWidth: "none", // For Firefox
        }}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">
          &times;
        </button>
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;  // For Chrome, Safari, and Opera
            }
          `}
        </style>
        {children}
      </div>
    </div>
  );
};

export default Modal;
