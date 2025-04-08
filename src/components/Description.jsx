import { useState, useEffect } from "react";
import React from "react";



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

// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
useEffect (() => {
    const timer = setInterval(() => {
        netxParagraphe();
    }, 10000);
    return () => clearInterval(timer) // Changer toute les 10sec
}, []); 


return (
    <section className="bg-[#101E2B] text-white text-center m-4 p-4 rounded fill-white drop-shadow-xl/25">
    <h1 className=" p-3 text-2xl">L'histoire des Galériens </h1>

    <div>
        <p>{paragraphs[index]}</p>
    </div>

<div className="p-3 w-full text-right">
    <button  className="bg-white text-black px-4 rounded"
    type="button"
    onClick={netxParagraphe}>➔
    </button>
    </div>


</section>
);

};

export default Description;