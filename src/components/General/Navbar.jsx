import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useCart } from "../../contexts/CartContext.jsx";
import { ShoppingBasket } from "lucide-react";
import ScriptaLogo from "../../assets/Scripta.svg";

function Navbar() {
  const { user } = useAuth();
  const { cart } = useCart();

  return (
    <nav className=" bg-red-400 h-20 py-1 mx-32 rounded-lg border-blue-400 border-0 border-b-2 border-solid">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-5">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={ScriptaLogo}
            className="w-60"
            alt="Scripta Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-lg font-semibold flex flex-col justify-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
               md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
               md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
               md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
               md:p-0"
              >
                Catálogo
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/cart"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
               md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
               md:p-0"
              >
                <ShoppingBasket />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              {user ? (
                <NavLink
                  to="/profile"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                 md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
                 md:p-0"
                >
                  Perfil
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
                 md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
                 md:p-0"
                >
                  Registro/Inicio de sesión
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                to="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 
               md:hover:bg-transparent md:border-0 md:hover:text-sky-900 
               md:p-0"
              >
                Sobre nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
