import React from "react";
import thumbUp from '../assets/thumb-up.svg'

function Header() {
  return (
    <header className="text-center text-gray-100 px-6 space-y-3" data-aos='fade-down'>
      <h1 className=" uppercase font-roboto font-semibold text-5xl">
        Coming <span className="text-orange-custom">soon</span>!
      </h1>
          <h4 className="text-xl font-medium text-center ">Mi portfolio aún se encuentra en desarrollo 👷🔧</h4>
    </header>
  );
}

export default Header;
