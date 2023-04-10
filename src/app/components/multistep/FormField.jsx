import React, { useEffect, useState } from "react";

const FormField = ({
  name,
  label,
  placeholder,
  onChangeYourInfo,
  value,
  isEmpty,
}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");

  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block");
      setRedBorder("border-[#ed3548]");
    }

  }, [isEmpty]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <label>{label}</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          Este campo es obligatorio
        </p>
      </div>
      <div>
        <input
          onChange={onChangeYourInfo}
          name={name}
          className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[var(--color-principal)] text-[15px] hover:border-[var(--color-principal)] focus:border-white focus:ring-[#bfe2fd]`}
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormField;
