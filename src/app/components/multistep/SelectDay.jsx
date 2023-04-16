import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import SectionHeading from "./SectionHeading";

// const product = {
//   name: 'Basic Tee 6-Pack ',
//   price: '$192',
//   rating: 3.9,
//   reviewCount: 117,
//   href: '#',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
//   imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
//   colors: [
//     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
//     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
//     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: 'XXL', inStock: true },
//     { name: 'XXXL', inStock: false },
//   ],
// }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SelectDay = (props) => {
  // const [open, setOpen] = useState(false)

  const { prevStep, nextStep, booking, onSelect, daysOptions, hoursOptions } = props;


  // const [selectedColor, setSelectedColor] = useState(daysOptions[0]);
  const [selectedSize, setSelectedSize] = useState(hoursOptions[2]);
  const [selected, setSelected] = useState(daysOptions[0])


  const nextHandler = () => {
    nextStep();
  };

  const prevHadler = (e) => {
    prevStep();
  };

  

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

  


  return (
    <div>
      <SectionHeading
        title="Seleccionar el día y hora"
        desc="Selecciona el día y hora disponible"
      />


<div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-2 flex">
            {daysOptions.map((days) => (
              <RadioGroup.Option
                key={days.name}
                value={days}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-[var(--color-secundario)]'
                      : ''
                  }
                  ${
                    checked ? 'bg-[var(--color-principal)] bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-xl p-4 mx-2 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm text-center">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {days.numday}
                            <br></br>
                            {days.day}
                          </RadioGroup.Label>
              
                        </div>
                      </div>
                      {/* {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )} */}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>



      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className="mt-4"
      >
        <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
        <div className="grid grid-cols-4 gap-4">
          {hoursOptions.map((hours) => (
            <RadioGroup.Option
              key={hours.hour}
              value={hours}
              disabled={!hours.inStock}
              className={({ active }) =>
                classNames(
                  hours.inStock
                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                  active ? "ring-2 ring-indigo-500" : "",
                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{hours.hour}</RadioGroup.Label>
                  {hours.inStock ? (
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-indigo-500" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-md"
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                      <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                      >
                        <line
                          x1={0}
                          y1={100}
                          x2={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
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

export default SelectDay;
