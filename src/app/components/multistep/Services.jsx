import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const Services = ({
  servicesOptions,
  employeeOptions,
  onServiceSelect,
  title,
  precio,
  id,
}) => {
  function Services() {
    const services = servicesOptions.map((service) => (
      <option value={service.title} key={service.id}>
        {service.title} ({service.precio})
      </option>
    ));
    return services;
  }

  function Employee() {
    const employees = employeeOptions.map((employee) => (
      <option value={employee.name} key={employee.id}>
        {employee.name}
      </option>
    ));
    return employees;
  }

  const SelectServices = () => (
    <select
      onChange={() => onServiceSelect(title, precio, id)}
      className="w-full rounded-lg border-gray-300 border p-3 text-sm"
    >
      <option value="">--Selecciona un servicio--</option>
      {Services()}
    </select>
  );

  const SelectEmployees = () => (
    <select className="w-full rounded-lg border-gray-300 border p-3 text-sm mt-10">
      <option value="">--Selecciona un empleado--</option>
      {Employee()}
    </select>
  );

  return (
    <div>
      <SectionHeading
        title="Seleccionar el servicio"
        desc="Selecciona el servicio y el empleado"
      />
      {SelectServices()}
      {SelectEmployees()}
    </div>
  );
};

export default Services;
