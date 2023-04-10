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
    <div className="my-5">
   
      <label>Seleccionar un servicio</label>
      <select
        onChange={() => onServiceSelect(title, precio, id)}
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
