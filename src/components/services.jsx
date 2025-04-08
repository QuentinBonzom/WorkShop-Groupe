import React from "react";


function services() {
    return (

        <div>
            <h1 className="font-semibold text-2xl lg:text-3xl flex justify-center pb-1">Nos Services</h1>
            
  <div className="flex flex-col lg:justify-center md:flex-row lg:flex-row lg:text-2xl xl:text-3xl font-bold p-1 rounded-t-2xl bg-white gap-7 lg:gap-0 xl:gap-0">
    
{/* /*FOURCHEST*/}

  <div className="mx-6 p-0.5 rounded-t-md bg-zinc-200 shadow-lg ">
  <video autoPlay muted loop className="w-full h-48 rounded-md">
    <source src="./src/assets/fourchestvideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-200">
    <h3 className="text-xl flex justify-center font-semibold mb-2">Fourch'Est</h3>
    <p className="text-gray-600 text-sm">Site de livraison de plats traditionnels du Grand-Est...</p>
    <a 
      href="https://deploy-preview-6--spiffy-truffle-4efe79.netlify.app/" 
      className="mt-4 bg-[#101E2B] text-white px-4 py-2 rounded-full text-sm flex justify-center hover:bg-[#3e5c78]"
    >
      Visiter
    </a>
  </div>
</div>

{/* /TODOLIST*/}
    
<div className="mx-6 p-0.5 rounded-t-md bg-zinc-200 shadow-lg">
  <video autoPlay muted loop className="w-full h-48 rounded-md ">
    <source src="./src/assets/todovideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-200">
    <h3 className="text-xl flex justify-center font-semibold mb-2">Todo List</h3>
    <p className="text-gray-600 text-sm">Site de Todo List pour une organisation parfaite...</p>
    <a 
      href="https://belovitchy.github.io/To_do_list/accueilMobile.html" 
      className="mt-4 bg-[#101E2B] text-white px-4 py-2 rounded-full text-sm flex justify-center hover:bg-[#3e5c78]"
    >
      Visiter
    </a>
  </div>
</div>
    
{/* WILDEAT */}

<div className="mx-6 p-0.5 rounded-t-md bg-zinc-200 shadow-lg">
  <video autoPlay muted loop className="w-full h-48 rounded-md">
    <source src="./src/assets/wildeatvideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-200">
    <h3 className="text-xl flex justify-center font-semibold mb-2">Wild Eat</h3>
    <p className="text-gray-600 text-sm">Site d'une caféteria pour les étudiants d'une école...</p>
    <a 
      href="https://thibaud-guadagna.github.io/project1/" 
      className="mt-4 bg-[#101E2B] text-white px-4 py-2 rounded-full text-sm flex justify-center hover:bg-[#3e5c78]"
    >
      Visiter
    </a>
  </div>
</div>
  </div>

        </div>
    )
}

export default services