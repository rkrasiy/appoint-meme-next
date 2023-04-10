import SectionHeading from "./SectionHeading"; 
 
const Services = ( props ) => { 
  
 const { servicesOptions, employeeOptions, prevStep, nextStep, booking } = props; 
 
 const nextHandler = () => { 
  nextStep(); 
 } 
 
 const prevHadler = () => { 
  prevStep() 
 } 
 
 return ( 
  <div> 
   <SectionHeading 
    title="Seleccionar el servicio" 
    desc="Selecciona el servicio y el empleado" 
   /> 
   <div className="my-5"> 
 
    <label>Seleccionar un servicio</label> 
    <select 
     className="w-full rounded-lg border-gray-300 border p-3 text-sm" 
    > 
     { 
      servicesOptions.map((service) => ( 
       <option service={service} value={service.title} key={service.title}> 
        {service.title} ({service.precio}) 
       </option> 
      )) 
     } 
    </select> 
   </div> 
   <div className="my-5"> 
    <label>Seleccionar un empleado</label> 
 
    <select className="w-full rounded-lg border-gray-300 border p-3 text-sm"> 
     { 
      employeeOptions.map((employee) => ( 
       <option employee={employee} value={employee.name} key={employee.name}> 
        {employee.name} 
       </option> 
      )) 
     } 
    </select> 
   </div> 
   <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:p-0 md:static items-center w-[700px]]"> 
    <button onClick={prevHadler} 
     className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[var(--color-principal)]`}> 
     Atras 
    </button> 
 
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
 
export default Services;