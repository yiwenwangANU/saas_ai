import { useRef } from "react";
import { useModalContext } from "../contexts/ModalContext";
import Overlay from "./Overlay";
import { XMarkIcon } from "@heroicons/react/16/solid";

function ModalWindow() {
  const { open, modalContent, handleCloseModal } = useModalContext();

  const modalref = useRef<HTMLDivElement | null>(null);

  if (!open) return null;
  else
    return (
      <Overlay>
        <div className="fixed inset-0 flex items-center justify-center ">
          <div
            ref={modalref}
            className="bg-white rounded-xl h-fit relative overflow-auto w-fit px-8 py-8"
          >
            <XMarkIcon
              className="w-6 h-6 p-1 absolute top-2 right-2 hover:bg-slate-100 hover:rounded-2xl hover:cursor-pointer"
              onClick={handleCloseModal}
            />
            {modalContent}
          </div>
        </div>
      </Overlay>
    );
}

export default ModalWindow;
