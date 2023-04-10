import { user } from '../../../data/user';

export default function Header() {
    return (
        <header aria-label="Page Header" className="bg-gray-50 border-b-8 border-[var(--color-principal)] rounded-t-xl">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">
                    <div className="relative hidden sm:block">
                        <label className="sr-only" htmlFor="search"> Search </label>

                        <input
                            className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Buscar..."
                        />

                        <button
                            type="button"
                            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end" >
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>

                            <a
                                href="#"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                            >
                                <span className="sr-only">Dashboard</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-5 h- 5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>

                            </a>

                            <a
                                href="#"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                            >
                                <span className="sr-only">Notificaciones</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>

                            </a>
                        </div>

                        <button
                            type="button"
                            className="group flex shrink-0 items-center rounded-lg transition"
                        >
                            <span className="sr-only">Menu</span>
                            <img alt="Man" src={user.logo} className="h-10 w-10 rounded-full object-cover" />

                            <p className="ml-2 hidden text-left text-xs sm:block">
                                <strong className="block font-medium">{user.name}</strong>

                                <span className="text-gray-500"> {user.email} </span>
                            </p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Bienvenido, {user.name}! 👋
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-500">
                        Selecciona el tipo de servicio y reserva ya tu cita! 📰
                    </p>
                </div>
            </div>
        </header>
    )
}