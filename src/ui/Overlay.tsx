import { FC, type ReactNode } from "react";

type OverlayProps = { children: ReactNode };

const Overlay: FC<OverlayProps> = ({ children }) => {
  return (
    <div className="z-50 bg-gray-900/90 w-full fixed top-0 bottom-0">
      {children}
    </div>
  );
};

export default Overlay;
