import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ booking, onChangeBooking, isEmpty, nextStep }) => {

  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Nombre",
      placeholder: "ej. Jose Ordaz",
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      placeholder: "ej. joseordazsuay@gmail.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Teléfono",
      placeholder: "ej. +34 680 851 926",
    },
  ]);

  const nextHandler = () => {
	  nextStep();
	}

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
              onChangeBooking={onChangeBooking}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={booking[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
      <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:p-0 md:static items-center w-[700px]]">
				<button
					onClick={nextHandler}
					className="font-medium bg-[var(--color-principal)] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
				>
					Siguiente
				</button>
			</div>
    </div>
  );
};

export default YourInfo;
