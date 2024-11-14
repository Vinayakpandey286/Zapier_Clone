import React, { ReactNode } from "react";

const PrimaryButton = ({
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
          size === "small" ? "text-sm px-4 py-2" : "text-md px-20 py-3"
        } bg-orange rounded-full text-[#fff] m-2 font-semibold cursor-pointer hover:shadow-md text-center`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default PrimaryButton;
