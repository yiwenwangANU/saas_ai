import { createContext, ReactNode, useState } from "react";

interface ModalContextProps {
  open: boolean;
  modalContent: ReactNode;
  handleCloseModal: () => void;
  handleOpenModal: (content: ReactNode) => void;
}
export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const handleCloseModal = () => {
    setOpen(false);
    setModalContent(null);
  };
  const handleOpenModal = (content: ReactNode) => {
    setOpen(true);
    setModalContent(content);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        modalContent,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
