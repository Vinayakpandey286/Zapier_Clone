import React, { ReactHTMLElement } from "react";

const Input = ({
  type,
  label,
  onChange,
  placeholder = "",
}: {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <div>
      <label className="font-medium text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="h-8 border-[1px] border-solid border-black ml-4"
      />
    </div>
  );
};

export default Input;
