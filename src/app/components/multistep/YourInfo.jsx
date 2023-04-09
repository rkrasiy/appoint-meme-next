import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Nombre",
      placeholder: "ej. John Doe",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      placeholder: "ej. john@gmail.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Teléfono",
      placeholder: "ej. +34 234 567 890",
    },
  ]);

  return (
    <div>
      <SectionHeading
        title="Información de contacto"
        desc="Por favor proporcione su nombre, dirección de correo electrónico y número de teléfono."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
