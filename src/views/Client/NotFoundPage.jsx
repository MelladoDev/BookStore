import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  p-4 Layout">
      <img 
      src="https://raw.githubusercontent.com/MelladoDev/BookStore/8b160f5f6d850256e15446c24d71ba03710e6b96/src/assets/blob%20(1).svg"
       alt="blob" 
       className="absolute z-10 h-4/6 w-4/6 top-20 drop-shadow-lg rotate-180"
       transform="rotate(45deg)"
      />
      
      <img src="https://raw.githubusercontent.com/MelladoDev/BookStore/8b160f5f6d850256e15446c24d71ba03710e6b96/src/assets/404%20Error%20with%20a%20cute%20animal-pana.svg" 
      alt="cat" 
      className="relative z-20 h-96 w-96 drop-shadow-lg " />

      
      <p className="relative z-20 mt-20 text-xl text-black font-bold text-center">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
