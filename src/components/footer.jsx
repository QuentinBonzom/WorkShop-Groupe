import { useState } from 'react'

function Footer() {
    const [alert, setAlert] = useState (false)
    const handleSubmit = (event) => {
      event.preventDefault();
      setAlert(true); 
      setTimeout(() => {
        setAlert(false); 
      }, 3000);
    }
     

    return (
      <>
        <div className="py-12">
          <form className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Nom et prénom */}
            <div className="flex gap-5 mb-4">
              <div className="w-1/2">
                <input
                  className="w-full bg-gray-200 pl-4 rounded-sm p-2 shadow-md"
                  type="text"
                  placeholder="Nom..."
                  name="nom"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  className="w-full bg-gray-200 pl-4 rounded-sm p-2 shadow-md"
                  type="text"
                  placeholder="Prénom..."
                  name="prenom"
                  required
                />
              </div>
            </div>
  
            {/* Email */}
            <div className="mb-4">
              <input
                className="w-full bg-gray-200 pl-4 rounded-sm p-2 shadow-md"
                type="email"
                placeholder="Email : example@example.com"
                name="email"
                required
              />
            </div>
  
            {/* Numéro de téléphone */}
            <div className="flex gap-5 mb-4">
              <div className="w-1/2">
                <input
                  className="w-full bg-gray-200 pl-4 rounded-sm p-2 shadow-md"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  name="phoneNumber"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  className="w-full bg-gray-200 pl-4 rounded-sm p-2 shadow-md"
                  type="tel"
                  placeholder="05 00 00 00 00"
                  name="fixeNumber"
                  required
                />
              </div>
            </div>
  
            {/* Description / Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
              </label>
              <textarea
                id="message"
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-md shadow-sm"
                placeholder="Votre message..."
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
  
            {/* Button Envoyer */}
            <div className="flex justify-center">
              <button
                type="Envoyer"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                onClick={handleSubmit}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
          {/* Alerte */}
      {alert && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
          Formulaire envoyé avec succès !
        </div>
      )}
        {/* Footer */}
        <footer className="bg-[#101E2B] text-white text-center py-4">
          <p>© 2025 Les Galériens</p>
          <p className="text-xs">SIRET : 123 456 789 00012</p>
          <p className="text-xs">contact@lesgaleriens.com</p>
        </footer>
      </>
    );
  }
  
  export default Footer;
  