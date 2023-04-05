

export default function Steps(){

    return (
      
      <section class="bg-gray-100">
        
        <div class="border-t-[var(--color-principal)] border border-t-[10px]">


<div>
  <ol
    class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
  >
    <li class="flex items-center justify-center gap-2 p-4 bg-white cursor-pointer hover:bg-gray-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


      <p class="leading-none">
        <strong class="block font-medium"> Elegir servicio </strong>
        <small class="mt-1"> Primero elige el servicio para el que quieres reservar </small>
      </p>
    </li>

    <li class="relative flex items-center justify-center gap-2 p-4 cursor-pointer hover:bg-gray-50"
    >
      <span
        class="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"
      >
      </span>

      <span
        class="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 sm:block"
      >
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


      <p class="leading-none">
        <strong class="block font-medium"> Día y hora </strong>
        <small class="mt-1"> Elige el día y la hora disponible para tu cita </small>
      </p>
    </li>

    <li class="flex items-center justify-center gap-2 p-4 cursor-pointer hover:bg-gray-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


      <p class="leading-none">
        <strong class="block font-medium"> Datos de contacto </strong>
        <small class="mt-1"> Indícanos tus datos de contacto </small>
      </p>
    </li>
  </ol>
</div>

        </div>
        {/* <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
              En este apartado puede solicitar cita previa para cualquier servicio.
Si lo desea tambien puede llamarnos al número de teléfono y solicitar cita.</p>
      
              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-[var(--color-principal)]">
                  0151 475 4450
                </a>
      
                <address class="mt-2 not-italic">
                San Francisco, California, Estados Unidos                </address>
              </div>
            </div>
      
            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">Name</label>
                  <input
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
      
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
      
                  <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
      
                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      class="peer sr-only"
                      id="option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />
      
                    <label
                      for="option1"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>
      
                  <div>
                    <input
                      class="peer sr-only"
                      id="option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />
      
                    <label
                      for="option2"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>
      
                  <div>
                    <input
                      class="peer sr-only"
                      id="option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />
      
                    <label
                      for="option3"
                      class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div>
      
                <div>
                  <label class="sr-only" for="message">Message</label>
      
                  <textarea
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
      
                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}

      </section>
      
        
    )
}