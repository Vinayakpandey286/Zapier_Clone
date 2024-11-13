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
          size === "small" ? "text-sm px-4 py-2" : "text-xl px-8 py-10"
        } bg-amber-700 rounded-2xl text-[#fff] m-2`}
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
};

export default PrimaryButton;
