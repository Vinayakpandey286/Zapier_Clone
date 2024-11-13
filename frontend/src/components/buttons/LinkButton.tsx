import React, { ReactNode } from "react";

const LinkButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div>
      <div
        className="p-2 my-2 font-light cursor-pointer text-sm hover:bg-slate-100 rounded-md"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default LinkButton;
