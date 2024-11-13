import React, { ReactNode } from "react";

const LinkButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div className="px-2 py-4 pointer text-sm" onClick={onClick}>
      {children}
    </div>
  );
};

export default LinkButton;
