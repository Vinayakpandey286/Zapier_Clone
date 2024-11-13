import React, { ReactNode } from "react";

const SecondaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "big" | "small";
}) => {
  return (
    <div>
      <div
        className={`${
          size === "small" ? "text-sm px-4 py-2" : "text-md px-20 py-2"
        } border-[1px] border-solid border-black rounded-full m-2 font-semibold cursor-pointer hover:shadow-md`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default SecondaryButton;
