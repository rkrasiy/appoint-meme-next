import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";

import Services from "./Services";
import Step from "./Step";

import { user } from "../../../../data/user";

const Form = () => {


  //------------------------------STATES------------------------------//
  
  

  const [goBackVisible, setGoBackVisible] = useState("invisible");

  const [steps, setSteps] = useState([
    { id: 1, title: "Inf. de contacto", active: true },
    { id: 2, title: "Servicio", active: false },
    { id: 3, title: "Día y hora", active: false },
    { id: 4, title: "Resumen", active: false },
  ]);

  const [yourInfo, setYourInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

    // const [servicesOptions, setServicesOptions] = useState([
  //   { id: 1, title: "Corte de pelo adulto", precio: "15€", selected: false },
  //   { id: 2, title: "Corte de pelo niño", precio: "10€", selected: false },
  //   { id: 4, title: "Corte de barba", precio: "8€", selected: false },
  //   { id: 5, title: "Corte de pelo bebe", precio: "9€", selected: false },
  // ]);

  // const [employeeOptions, setEmployeeOptions] = useState([
  //   { id: 1, name: "Juan", cargo: "Jefe", selected: false },
  //   { id: 1, name: "Jose", cargo: "Empleado", selected: false },
  //   { id: 1, name: "Dani", cargo: "Empleado", selected: false },
  // ]);


  const [stepNumber, setStepNumber] = useState((1));
  const [isEmpty, setIsEmpty] = useState(false);




  //------------------------------SIDE EFFECTS------------------------------//

  /*Este useEffect es para los titulos de los steps, los activa y desactiva*/

  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });

    /*Para el boton de volver atras*/
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [
    stepNumber,

  ]);

  //------------------------------FUNCTIONS------------------------------//

  /*Esto es para validar el boton del siguiente paso*/

  const nextStep = () => {
    // if (stepNumber == 1) {
    //   if (
    //     yourInfo.name.length == 0 ||
    //     yourInfo.email.length == 0 ||
    //     yourInfo.phone.length == 0
    //   ) {
    //     setIsEmpty(true);
    //     return;
    //   } else {
    //     setIsEmpty(false);
    //   }
    // }

    if (stepNumber == 2) {
      if (setServicesOptions && setServicesOptions == false) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };


  const changeYourInfo = (event) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const selectService = (title, price, id) => {


    setServicesOptions((prevService) => {
      return { ...prevService, title: title, precio: price };
    });
  };



  return (
    <div className="w-full max-w-3xl">
      <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
        <div className="relative bg-[var(--color-principal)">
          <div className="w-[245px] h-[508px] bg-[var(--color-principal)] rounded-xl"></div>

          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {[
    { title: "Inf. de contacto" },
    { title: "Servicio"},
    { title: "Día y hora"},
    { title: "Resumen" } 
   ].map((item, index) => (
  <Step key={item.title} number={index + 1} title={item.title} active={ setStepNumber === index } /> 
  ))}
          </div>
        </div>
        <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-12 md:w-100 md:my-2">
          {
            <>
              <div>
                {(stepNumber === 1 && (
                  <YourInfo
                    onChangeYourInfo={changeYourInfo}
                    yourInfo={yourInfo}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  />
                )) ||
                  (stepNumber === 2 && (
                    <Services
                    servicesOptions={user.services} 
                    employeeOptions={user.employers} 
                    booking={booking} 
                    onChangeBooking={changeBooking} 
                    nextStep={nextStep} 
                    prevStep={prevStep} 
                            
                    />
                  ))}
              </div>
              <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:p-0 md:static items-center w-[700px]]">
                <div
                  onClick={prevStep}
                  className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[var(--color-principal)] ${goBackVisible}`}
                >
                  Atras
                </div>
                {stepNumber === 4 ? (
                  <div
                   
                    className="font-medium bg-[var(--color-principal)] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Confirmar
                  </div>
                ) : (
                  <div
                    onClick={nextStep}
                    className="font-medium bg-[var(--color-principal)] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Siguiente
                  </div>
                )}
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Form;
