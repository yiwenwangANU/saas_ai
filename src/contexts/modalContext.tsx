import { createContext, FC, ReactNode, useContext, useState } from "react";

type ModalContextProps = {
  open: boolean;
  modalContent: ReactNode;
  handleCloseModal: () => void;
  handleOpenModal: (content: ReactNode) => void;
};
const ModalContext = createContext<ModalContextProps | null>(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);
  if (modalContext === null) {
    throw new Error("Modal context used outof provider!");
  }
  return modalContext;
};

type ModalProviderProps = {
  children: ReactNode;
};
export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const handleCloseModal = () => {
    setOpen(false);
    setModalContent(null);
  };
  const handleOpenModal = (content: ReactNode) => {
    setOpen(true);
    console.log("123");
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
