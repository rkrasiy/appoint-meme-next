"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../src/app/styles/Home.module.css";
import Steps from "./steps";

export default function FormSteps() {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  const Input = ({ label, required, type, placeholder }) => (
    <div>
      <legend>{label}</legend>
      <input
        {...register(label, { required })}
        className={errors[label] && styles.inputInvalid}
        type={type}
        placeholder={placeholder}
      />
      {errors[label] && <span>Oblitatorio</span>}
    </div>
  );

  function renderServices() {
    const services = [
      { id: 1, title: "Corte de pelo adulto", precio: "15€" },
      { id: 2, title: "Corte de pelo niño", precio: "10€" },
      { id: 4, title: "Corte de barba", precio: "8€" },
      { id: 5, title: "Corte de pelo bebe", precio: "9€" },
    ];
    const content = services.map((service) => (
      <option value={service.title} key={service.id}>
        {service.title} ({service.precio})
      </option>
    ));

    return content;
  }

  function getNombreDia(dia) {
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    return dias[dia];
  }

  function getHoras(hora) {
    const horasLaborales = [];
    for (let h = 8; h <= 17; h++) {
      // recorremos las horas laborales del día (de 8am a 5pm)
      for (let m = 0; m <= 30; m += 30) {
        // recorremos los minutos (cada 30 minutos)
        const hora = ("0" + h).slice(-2); // formateamos la hora con 2 dígitos
        const minuto = ("0" + m).slice(-2); // formateamos el minuto con 2 dígitos
        horasLaborales.push(`${hora}:${minuto} AM`); // agregamos la hora y el minuto al array de horas laborales AM
      }
    }
    for (let h = 1; h <= 4; h++) {
      // recorremos las horas laborales del día (de 1pm a 4pm)
      for (let m = 0; m <= 30; m += 30) {
        // recorremos los minutos (cada 30 minutos)
        const hora = ("0" + (h + 12)).slice(-2); // sumamos 12 horas a la hora para usar formato PM, y formateamos la hora con 2 dígitos
        const minuto = ("0" + m).slice(-2); // formateamos el minuto con 2 dígitos
        horasLaborales.push(`${hora}:${minuto} PM`); // agregamos la hora y el minuto al array de horas laborales PM
      }
    }

    return horasLaborales[hora];
  }

  const SelectService = () => (
    <section className={styles.inputGroup}>
      <h2 className="text-[var(--color-principal)]">Elegir servicio</h2>
      <p className="text-gray-400 font-semibold mb-6">
        Por favor seleccione el servicio para el que desea reservar
      </p>

      <label className=" font-semibold text-[var(--color-principal)]">
        Seleccione un servicio
      </label>
      <select
        required
        className="w-full rounded-lg border-gray-300 border p-3 text-sm"
        placeholder="Name"
        type="text"
        id="name"
      >
        <option required value="none" selected disabled hidden>
          --Selecciona un servicio--
        </option>
        {renderServices()}
      </select>
    </section>
  );

  const DateFields = () => (
    <section className={styles.inputGroup}>
      <h2 className="text-[var(--color-principal)]">Día y hora</h2>
      <p className="text-gray-400 font-semibold mb-6">
        Por favor seleccione el día y hora
      </p>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                {getNombreDia(1)}
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                {getNombreDia(2)}
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                {getNombreDia(3)}
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                {getNombreDia(4)}
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                {getNombreDia(5)}
              </th>

              <th class="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(1)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(5)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(7)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(3)}
                </a>
              </td>

              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(8)}
                </a>
              </td>
            </tr>

            <tr>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(8)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(5)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(7)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(3)}
                </a>
              </td>

              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(8)}
                </a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(1)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(5)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(7)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(3)}
                </a>
              </td>

              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(8)}
                </a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(1)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(15)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(7)}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(13)}
                </a>
              </td>

              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="inline-block rounded bg-[var(--color-principal)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-secundario)]"
                >
                  {getHoras(10)}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );

  const ContactFields = () => (
    <section className={styles.inputGroup}>
      <h2 className="text-[var(--color-principal)]">Contacto</h2>
      <p className="text-gray-400 font-semibold mb-6">
        Por favor seleccione indique sus datos de contacto
      </p>

      <div class="col-span-6 sm:col-span-3">
        <label className=" font-semibold text-[var(--color-principal)]">
          Nombre
        </label>
        <input
          type="text"
          id="FirstName"
          name="first_name"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label className=" font-semibold text-[var(--color-principal)]">
          Apellidos
        </label>

        <input
          type="text"
          id="LastName"
          name="last_name"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <Input
        label="Email"
        required
        type="email"
        placeholder="elonmusk@twitter.com"
      />

      <Input
        label="Teléfono"
        required
        type="tel"
        placeholder="+34 680 851 926"
      />
    </section>
  );

  const Navigation = () => (
    <section className={styles.navigationControls}>
      {step === fieldGroups.length - 1 && (
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isValid}
        >
          CONFIRMAR
        </button>
      )}
      {step < fieldGroups.length - 1 && (
        <button
          type="submit"
          className={styles.nextButton}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
          SIGUIENTE
        </button>
      )}
      {step > 0 && (
        <button
          type="button"
          className={styles.backButton}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          ATRAS
        </button>
      )}
    </section>
  );

  const Reference = () => (
    <footer className={styles.reference}>{renderMarkers()}</footer>
  );





  const StepNavigation = () => (


<div
className="py-4 mb-4 relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
>
<ol
  className="relative z-10 flex justify-between text-sm font-medium text-gray-500"
>
  <li className="flex items-center gap-2 bg-white p-2">

  <span className={step === 0 ? styles.markerStepActive : styles.markerStepDefault}> 1 </span>

    <span className="hidden sm:block"> Servicio </span>
  </li>

  <li className="flex items-center gap-2 bg-white p-2">

  <span className={step === 1 ? styles.markerStepActive : styles.markerStepDefault}> 2 </span>


    <span className="hidden sm:block"> Día y hora </span>
  </li>

  <li className="flex items-center gap-2 bg-white p-2">
  <span className={step === 2 ? styles.markerStepActive : styles.markerStepDefault}> 3 </span>


    <span className="hidden sm:block"> Datos </span>
  </li>
  <li className="flex items-center gap-2 bg-white p-2">
  <span className={step === 3 ? styles.markerStepActive : styles.markerStepDefault}> 4 </span>


    <span className="hidden sm:block"> Resumen </span>
  </li>
</ol>
</div>

  );

  function renderMarkers() {
    let markers = [];
    for (let i = 0; i < fieldGroups.length; i++)
      markers.push(
        <span className={step >= i ? styles.markerBlue : styles.markerGray} />
      );
    console.log(step);

    return markers;
  }
  



  const fieldGroups = [<SelectService />, <DateFields />, <ContactFields />];

  return (
    <div>
      <div className="relative overflow-hidden bg-indigo-900">
        <img
          src="./fondo.svg"
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container px-6 py-4 mx-auto md:px-12">
            <div className="items-center justify-between md:flex">
              <div className="flex items-center justify-between">
                <a href="#" className="text-white">
                  <svg
                    className="w-8 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Capa 1"
                    viewBox="0 0 16.16 12.57"
                  >
                    <defs></defs>
                    <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                    <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                  </svg>
                </a>
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="items-center hidden md:flex">
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  Sobre nosotros
                </a>
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  Precios
                </a>
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  Ayuda
                </a>
                <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                  Donde estamos
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <p className="font-bold text-yellow-400 text-2xl uppercase">
              Cita Previa{" "}
            </p>
            <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
              Reserva tu cita
              <br />
              para nuestros servicios
            </h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <StepNavigation />
            {fieldGroups[step]}
            <Navigation />
            <Reference />
          </form>
        </div>
      </div>
    </div>
  );
}
