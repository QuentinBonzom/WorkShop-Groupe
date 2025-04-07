import React from "react";

function Header() {
  return (
    <>
      <header className=" bg-primary">
        <img
          className="w-3xs m-auto "
          src="./src/assets/images/jon-tyson-ZA9PHAnVP5g-unsplash-Recupere.jpg"
          alt="Les galériens"
        />
      </header>
      <nav className="flex justify-center  ">
        <ul className="flex bg-primary mt-5 text-white w-5/6 justify-around rounded-3xl p-2 font-semibold text-lg md:w-3/5 xl:w-2/6 xl:absolute top-2 right-7 ">
          <li>Acceuil</li>
          <li>Nos services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
