function services() {
    return (

        <div>
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl lg:ml-10 ml-4">Nos Services</h1>
            
  <div className="flex flex-col lg:justify-center md:flex-row lg:flex-row lg:text-2xl xl:text-3xl  mt-4 font-bold space-y-4 lg:space-y-0 lg:space-x-4 lg:pb-5">
    
{/* /*FOURCHEST*/}

  <div className="mx-6 rounded-2xl shadow-lg">
  <video autoPlay muted loop className="w-full h-48 rounded-2xl">
    <source src="./src/assets/fourchestvideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-100">
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
    
<div className="mx-6 rounded-2xl shadow-lg">
  <video autoPlay muted loop className="w-full h-48 rounded-2xl">
    <source src="./src/assets/todovideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-100">
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

<div className="mx-6 rounded-2xl shadow-lg">
  <video autoPlay muted loop className="w-full h-48 rounded-2xl">
    <source src="./src/assets/wildeatvideo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="px-6 py-4 bg-zinc-100">
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