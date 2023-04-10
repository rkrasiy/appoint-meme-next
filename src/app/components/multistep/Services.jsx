import SectionHeading from "./SectionHeading";

import  user  from '../../../data/user.js';


const Services = ({

}) => {

  function Services() {
    const services = user.map((service) => (
      <option service={service} value={service.title} key={service.title}>
        {service.title} ({service.precio})
      </option>
    ));
    return services;
  }

  function Employee() {
    const employees = employeeOptions.map((employee) => (
      <option employee={employee} value={employee.name} key={employee.name}>
        {employee.name}
      </option>
    ));
    return employees;
  }

  const SelectServices = () => (
    <div className="my-5">
   
      <label>Seleccionar un servicio</label>
      <select 
        className="w-full rounded-lg border-gray-300 border p-3 text-sm"
      >
        {Services()}
      </select>
    </div>
  );

  const SelectEmployees = () => (
    <div className="my-5">
      <label>Seleccionar un empleado</label>

      <select  className="w-full rounded-lg border-gray-300 border p-3 text-sm">
        {Employee()}
      </select>
    </div>
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
