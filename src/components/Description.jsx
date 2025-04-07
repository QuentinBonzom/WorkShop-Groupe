import { useState, useEffect } from "react";

const paragraphs = [
    "Tout a commencé sur une mer agitée de balises, de bugs et de lignes de code. Ensemble, nous avons ramé, souvent à contre-courant, mais toujours avec humour et entraide.",

    "De la Wild Code School à nos premiers projets freelance, chaque ligne de code a été une rame de plus vers l'autonomie. Aujourd’hui, on est prêts à embarquer sur vos projets web, avec rigueur… et un brin d’auto-dérision ! "
];

const Description = () => {

    // Acceder à chaque paragraphe 
    const [index, setIndex ] = useState (0);

    const netxParagraphe = () => {
        setIndex((index) => (index+1) % paragraphs.length);
    };

useEffect (() => {
    const timer = setInterval(() => {
        nextParagraph();
    }, 5000);
    return () => clearInterval(timer) // Changer toute les 5sec
}, []); 


return (
    <section>
    <h1 class="text-center">L'histoire des Galériens </h1>

    <div>
        <p>{paragraphs[index]}</p>
    </div>

    <button 
    type="button"
    onClick={nextParagraph}>Suivant</button>


</section>
);

};

export default Description;