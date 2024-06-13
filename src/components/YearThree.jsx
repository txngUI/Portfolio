import React, { useState } from "react";
import Abilitie from "../ui/Abilite";

function YearThree({theme}) {
  const abilities = [
    {
      abilitie: "Compétence 1 : Réaliser un développement d’application",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 2 : Appliquer des principes d’accessibilité et d’ergonomie ",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 3 : Adopter de bonnes pratiques de conception et de programmation",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 4 : Utiliser des patrons de conception pour le développement d’applications cohérentes",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 5 : Adapter les solutions existantes au contexte applicatif",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 6 : Vérifier et valider la qualité de l’application par les tests",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
      ],
      sources: [],
    },
    {
      abilitie: "Compétence 2 : Optimiser des applications",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Choisir des structures de données complexes adaptées au problème",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...) ",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 3 : Appréhender la différence entre les paradigmes de programmation",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 4 : Comprendre les enjeux et moyens de sécurisation des données et du code",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 5 : Évaluer l’impact environnemental et sociétal des solutions proposées",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
      ],
      sources: [],
    },
    {
      abilitie: "Compétence 6 : Collaborer au sein d’une équipe informatique",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,…) ",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 2 : Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation ",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 3 : Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
        {
          name: "Apprentissage Critique 4 : Rendre compte de son activité professionnelle",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [],
        },
      ],
      sources: [],
    },
    {
      abilitie: "Compétence 7 : Culture Générale",
      critical_learning: [
        {
          name: "",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [
            
          ],
        },
        {
          name: "",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [
           
          ],
        },
        {
          name: "",
          acquired: [],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "",
              desc: [],
            },
          ],
        },
      ],
      sources: [],
    },
  ];

  // State to track which competencies are expanded
  const [expanded, setExpanded] = useState(Array(abilities.length).fill(false));

  // Function to toggle the expanded state
  const toggleExpand = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {abilities.map((ability, index) => (
        <div style={{ marginTop: "10px", marginBottom: "10px" }} key={index}>
          <button
            className="btn-abilite"
            onClick={() => toggleExpand(index)}
            style={{
              fontSize: "25px",
              backgroundColor:
                theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
              color:
                theme === "light"
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
          >
            {ability.abilitie}
          </button>
          {expanded[index] && (
            <Abilitie
              theme={theme}
              abilitie={ability.abilitie}
              critical_learning={ability.critical_learning}
              sources={ability.sources}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default YearThree;
