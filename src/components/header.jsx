import React from "react";

function Header() {
  return (
    <>
      <header className=" bg-primary">
        <nav className="flex justify-center  ">
          <ul className="flex mt-5 text-white w-5/6 justify-around rounded-3xl p-1 xl:font-semibold xl:text-shadow-md md:w-2/5 xl:w-2/7  ">
            <li>Accueil</li>
            <li>Nos services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <img
          className="w-3xs m-auto pt-3 "
          src="./src/assets/images/jon-tyson-ZA9PHAnVP5g-unsplash-Recupere.jpg"
          alt="Les galériens"
        />
      </header>
    </>
  );
}

export default Header;
