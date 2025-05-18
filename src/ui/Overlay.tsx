import { ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <div className="z-50 bg-gray-900/90 w-full fixed top-0 bottom-0">
      {children}
    </div>
  );
};

export default Overlay;
