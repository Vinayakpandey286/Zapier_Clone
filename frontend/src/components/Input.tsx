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
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm">{label}</label>
      <div className="">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className="h-8 border-[1px] border-solid border-black w-[100%]"
        />
      </div>
    </div>
  );
};

export default Input;
