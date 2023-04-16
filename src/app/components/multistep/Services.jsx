import SectionHeading from "./SectionHeading";

const Services = ( props ) => {
	const { servicesOptions, employeeOptions, prevStep, nextStep, booking, onSelect } = props;

	const nextHandler = () => {
		nextStep();
	}

	const prevHadler = (e) => {
		prevStep()
	}

	return (
		<div>
			<SectionHeading
				title="Seleccionar el servicio"
				desc="Selecciona el servicio y el empleado"
			/>
			<div className="my-5 text-[14px]">

				<label>Seleccionar un servicio</label>
				
				<select
					onChange={(e)=>onSelect({service: e.target.value})}
					className="w-full rounded-lg border-gray-300 border p-3 text-sm"
				>
					{
						servicesOptions.map((service) => (
							<option service={service.id} value={service.title} key={service.title} selected={booking.service && booking.service == service.title}>
								{service.title} ({service.precio})
							</option>
						))
					}
				</select>
			</div>
			<div className="my-5 text-[14px] ">
				<label>Seleccionar un empleado</label>

				<select
					onChange={(e)=>onSelect({employee: e.target.value})}
					className="w-full rounded-lg border-gray-300 border p-3 text-sm">
					{
						employeeOptions.map((employee) => (
							<option employee={employee.id} value={employee.name} key={employee.name} selected={booking.employee && booking.employee == employee.name}>
								{employee.name}
							</option>
						))
					}
				</select>
			</div>
			<div className="absolute bottom-0 w-full flex flex-row justify-between">
				<button onClick={prevHadler}
					className={`font-medium text-[#9699ab] select-none border border-gray-400 py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:text-[var(--color-principal)]`}>
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