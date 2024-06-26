import React from "react";
import Abilitie from "../ui/Abilite";
import { useState } from "react";

function YearOne({ theme }) {
  const abilities = [
    {
      abilitie: "Compétence 1 : Réaliser un développement d’application",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Implémenter des conceptions simples",
          acquired: [
            "Réaliser une documentation complète",
            "Comprends les concepts de la programmation orientée objet",
            "Implémenter une solution simple",
            "Sait implémenter les algorithmes de base",
          ],
          not_acquired: [],
          in_progress: [
            "Fonctionnement théorique de la solution partiellement compris",
          ],
          traces: [
            {
              name: "SAE 1.02",
              desc: [
                "Implémentation des tris rapides, fusion, etc ...",
                "Implémentation des algorithmie de recherche (dichotomie)",
              ],
            },
            {
              name: "SAE 2.02",
              desc: [
                "Implémentation des concept de la POO",
                "Implémentation des graphes et algorithmes A* et BFS",
              ],
            },
            {
              name: "Récursivité",
              desc: [],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Élaborer des conceptions simples",
          acquired: [
            "La solution est fonctionnelle",
            "Code clair et intuitif",
            "Programmer via les concepts de la Programmation Orientée Objet",
          ],
          not_acquired: [],
          in_progress: ["La solution peut ne pas être la plus optimisée"],
          traces: [
            {
              name: "SAE 1.02",
              desc: [
                "Conception d’une filmothèque avec des algorithmes simples où l’on teste les différents algorithmes pour utiliser le plus apte à répondre au besoin efficacement (tris, filtres...)",
              ],
            },
            {
              name: "Projet “Western Legacy”",
              desc: [
                "Conception d’un programme réunissant tous les concepts de Programmation Orienté Objet",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Faire des essais et évaluer leurs résultats en regard des spécifications",
          acquired: [
            "Les tests permettent de valider les fonctionnalités de la solution",
            "Les tests sont pertinents",
            "Les tests analysent l’efficacité, la rapidité et la capacité",
          ],
          not_acquired: [],
          in_progress: ["L’interprétation des analyses est complète"],
          traces: [
            {
              name: "SAE 1.02 ",
              desc: [
                "Analyser les différents résultats par des graphes, des unités de mesures mathématiques",
              ],
            },
            {
              name: "Ressource qualité de développement",
              desc: ["Savoir réaliser des tests pour contrôler son programme"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Développer des interfaces utilisateurs",
          acquired: [
            "L’interface est intuitive",
            "Les fonctionnalités sont complètes et pertinentes",
            "L’interface est adapté à tout handicapes",
          ],
          not_acquired: [],
          in_progress: [
            "L’interface possède pas obligatoirement un tutoriel si elle est complexe à l’utilisation",
          ],
          traces: [
            {
              name: "Projet IHM : pizzaiolo",
              desc: [
                "Création d’applications ayant pour but de simplifier l’utilisation des rôles des acteurs l’utilisant et les fonctions qui doivent être implémenter. Création d’une borne pour le pizzaiolo avec technologie d’eye tracker, application mobile pour le livreur et le client.",
              ],
            },
            {
              name: "Projet JavaFX : Jeu du morpion",
              desc: [
                "Conception d’un jeu de Morpion intuitif proposant une large gamme de fonctionnalités",
              ],
            },
          ],
        },
      ],
      sources: [
        {
          title: "SAE 1.02 : Filmothèque",
          url: "https://github.com/txngUI/Filmotheque",
          desc: "Réalisation d'un programme permettant de filtrer, rechercher, trier des films selon leurs caractéristiques à partir d'une Base de Données de films de différentes tailles afin de comparer les différents algorithmes.",
        },
        {
          title: "Pizzaiolo",
          url: "https://www.figma.com/file/H4OVluG5YmXghhpL55i79q/applis?node-id=82%3A341&t=LnlYlq9dAnbvbQre-0",
          desc: "Réalisation de trois interfaces selon des besoins différents pour apprendre à s'adapter et faciliter les fonctionnalités selon les différents besoins des clients.",
        },
        {
          title: "Jeu du Morption",
          url: "https://github.com/txngUI/Tic-Tac-Toe",
          desc: "Réalisation d'un jeu de morpion afin de s'approprier le langage JavaFX qui permet de faire des interfaces et de pouvoir faciliter l'accès au jeux et la navigation.",
        },
        {
          title: "Dungeons",
          url: "https://github.com/txngUI/Dungeon",
          desc: "Programme de transformation de Donjons déjà donnés en graphes afin d'appliquer les algorithmes pour trouver le plus court chemin d'un point A à un point B et les comparer.",
        },
      ],
    },
    {
      abilitie: "Compétence 2 : Optimiser des applications",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données)",
          acquired: [
            "Les différentes structures de données sont comprises ",
            "La solution est méthodique",
          ],
          not_acquired: [],
          in_progress: [
            "Les différents tris sont bien implémenté mais leurs coût d’optimisation est mal comrpis",
          ],
          traces: [
            {
              name: "TP Java",
              desc: [
                "Implémentation et conception d’une calculatrice et d’un jeu de cartes pour utiliser et comprendre les structures de données Pile et File respectivement sous modèle LIFO et FIFO.",
              ],
            },
            {
              name: "SAE 1.02",
              desc: [
                "Implémentation des algorithmes de tris, de recherche et de structures de données selon un besoin concret, une filmothèque.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)",
          acquired: [
            "Les algorithmes sont fonctionnels et optimisés",
            "L’analyse des algorithmes sont pertinents et corrects",
            "Le programme est bien expliqué et les résultats interprétés.",
          ],
          not_acquired: [],
          in_progress: ["Le coût est optimisé mais mal compris"],
          traces: [
            {
              name: "SAE 1.02",
              desc: [
                "Comparaison et analyse des algorithmes de tris et de recherches selon un besoin concret, une filmothèque.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Formaliser et mettre en œuvre des outils mathématiques pour l’informatique.",
          acquired: [
            "L'utilisation des algorithmes BFS et A* est maitrisé et permettent au programme d'être optimisé",
            "Les statistiques analyse les résultats des tests et sont pertinents",
          ],
          not_acquired: [],
          in_progress: [
            "Des bibliothèques mathématiques sont utilisées pour optimiser le programme",
          ],
          traces: [
            {
              name: "SAE 1.02 ",
              desc: [
                "Compte rendu des résultats des comparaisons d’algorithmes de tris et de recherches avec une analyse approfondie à l’aide de diagramme.",
              ],
            },
            {
              name: "SAE 2.02",
              desc: [
                "Utilisation de la théorie des Graphes et des algorithmes permettant de calculer le plus court chemin BFS et A* afin de répondre à un problème de résolution de Donjons.",
              ],
            },
          ],
        },
      ],
      sources: [
        {
          title: "SAE 1.02 : Filmothèque",
          url: "https://github.com/txngUI/Filmotheque",
          desc: "Réalisation d'un programme permettant de filtrer, rechercher, trier des films selon leurs caractéristiques à partir d'une Base de Données de films de différentes tailles afin de comparer les différents algorithmes.",
        },
        {
          title: "Dungeons",
          url: "https://github.com/txngUI/Dungeon",
          desc: "Programme de transformation de Donjons déjà donnés en graphes afin d'appliquer les algorithmes pour trouver le plus court chemin d'un point A à un point B et les comparer.",
        },
        {
          title: "Compte Rendu des performances de la Filmothèque",
          url: "https://docs.google.com/document/d/1W4JSBmGth5S6vIJOscNAkWnSYGoCzQxLPypzm-ayuu8/edit",
          desc: "Programme de transformation de Donjons déjà donnés en graphes afin d'appliquer les algorithmes pour trouver le plus court chemin d'un point A à un point B et les comparer.",
        },
      ],
    },
    {
      abilitie:
        "Compétence 3 : Administrer des systèmes informatiques communicants complexes",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Identifier les différents composants (matériels et logiciels) d’un système numérique",
          acquired: [
            "Capable d’associer une fonction/un rôle au composant d’un système numérique qu’il a identifié",
            "Capable de placer ses composants dans un système numérique",
          ],
          not_acquired: [],
          in_progress: [
            "Connais les avantages et les inconvénients de chaques composants ",
          ],
          traces: [
            {
              name: "Anglais Technique",
              desc: [
                "Documents écrits + audio + différents exercices afin de comprendre les différents composants d’un système numérique, leurs fonctions, leurs unités / mesures, leurs importances, leurs rôles",
              ],
            },
            {
              name: "SAE 1.03",
              desc: [
                "Oral noté sur notre manière de mettre en place un système numérique",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Utiliser les fonctionnalités de base d’un système multi tâches / multi utilisateurs",
          acquired: [
            "Capable d’attribuer des autorisations.",
            "Capable de créer plusieurs comptes utilisateurs.",
          ],
          not_acquired: [],
          in_progress: [
            "Capable de présenter les principes de bases d’un système multi tâches / multi utilisateurs.",
          ],
          traces: [
            {
              name: "SAE 1.03",
              desc: [
                "Savoir utiliser des commandes dans le terminal sur une virtual machine sous Linux (Ubuntu) afin de naviguer entre les différents utilisateurs.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Installer et configurer un système d’exploitation et des outils de développement",
          acquired: [
            "Les outils de développement sont utilisable",
            "Capable de naviguer dans le système d’exploitation",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "SAE 1.03",
              desc: [
                "Installation d’une Machine Virtuelle d’un système d’exploitation Linux et sa configuration par des installations de logiciel tel que VS Code par des commandes dans le terminal Linux.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Configurer un poste de travail dans un réseau d’entreprise",
          acquired: ["Etablir les droits du poste de travail"],
          not_acquired: [],
          in_progress: [
            "Exécuter les logiciels à partir du terminal",
            "Capable d’établir des alias pour les commandes",
          ],
          traces: [
            {
              name: "SAE 1.03",
              desc: [
                "Appréhender l’environnement linux et terminal afin de configurer un poste de travail. ",
              ],
            },
          ],
        },
      ],
      sources: [],
    },
    {
      abilitie: "Compétence 4 : Gérer des données de l’information",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Mettre à jour et interroger une base de donnée relationnelle (en requête ou à travers une application)",
          acquired: [
            "Capable d’interroger une base de données",
            "Capable de mettre à jour, supprimer ou ajouter une donnée à la base de données",
            "Sait utiliser MySQL",
          ],
          not_acquired: [],
          in_progress: ["Sais utiliser SQL Server"],
          traces: [
            {
              name: "SAE 1.04",
              desc: [
                "Création d’une fausse base de données Netflix (entreprise choisie par notre groupe) afin de pouvoir écrire des requêtes et répondre à des commandes tel que des filtres, des sélections selon les films, etc...",
              ],
            },
            {
              name: "SAE 2.03",
              desc: [
                "Création d’une application Java FX utilisant un JDBC afin d’interagir avec la base de données via directement une interface, donc sans requêtes. Les requêtes sont dans le code.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Visualiser des données",
          acquired: [
            "Réaliser des Dictionnaires de Données, Dépendances Fonctionnelle et son graphe, Modèles Conceptuels de données.",
          ],
          not_acquired: [],
          in_progress: ["Fais des erreurs de syntaxes"],
          traces: [
            {
              name: "SAE 2.05",
              desc: [
                "Création d’un cahier des charges d’un logiciel de gestion de tâches pour une entreprise où l’on créer leur Base de Données (à l’aide du logiciel Looping).",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Concevoir une base de données relationnelle à partir d’un cahier des charges.",
          acquired: [
            "La base de données est pertinente et fonctionnelle.",
            "Des commentaires pertinents sont indiqués",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "SAE 1.04 ",
              desc: [
                "Création d’une fausse base de données Netflix (entreprise choisie par notre groupe) afin de pouvoir écrire des requêtes et répondre à des commandes tel que des filtres, des sélections selon les films, etc...",
              ],
            },
            {
              name: "SAE 2.03 ",
              desc: [
                "Création d’une application Java FX utilisant un JDBC afin d’interagir avec la base de données via directement une interface, donc sans requêtes. Les requêtes sont dans le code",
              ],
            },
          ],
        },
      ],
      sources: [
        {
          title: "SAE 1.04 : Base de données Netflix",
          url: "https://www.mediafire.com/folder/4b2k0uqpwdp8g/SAE+1.04",
          desc: "Réalisation d'une base de données et ses visuels de l’application Netflix.",
        },
        {
          title: "Cahier des Charges",
          url: "https://docs.google.com/document/d/1VqXcn_AJqbqxXlhRfYWskVzxp06KnunuFcm1p5-VWGk/edit?usp=sharing",
          desc: "",
        },
        {
          title: "Dossier des Spécifications",
          url: "https://docs.google.com/document/u/1/d/19NKswWsRCs3gmItX-uqe_KBX9jbeY3NzeGn-Rr2aNCA/edit?usp=sharing",
          desc: "",
        },
      ],
    },
    {
      abilitie: "Compétence 5 : Conduire un projet",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Appréhender les besoins du client et de l’utilisateur",
          acquired: [
            "Le Cahier des Charges est complet",
            "Le Dossier de Spécifications est complet",
          ],
          not_acquired: [],
          in_progress: [
            "La communication entre les acteurs du projet est correcte mais pas parfait",
          ],
          traces: [
            {
              name: "SAE 2.06",
              desc: [
                "Comprendre les besoins du client (entreprise fictive) et élaborer un cahier des charges en fonction des contraintes.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Mettre en place les outils de gestion de projet",
          acquired: [
            "Capable d’élaborer un GANT",
            "Capable d’élaborer un PERT",
            "Capable d’anticiper les risques par un diagramme d’ISHIKAWA",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "SAE 2.06",
              desc: [
                "Comprendre les besoins du client (entreprise fictive) et élaborer un cahier des charges en fonction des contraintes.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Identifier les acteurs et les différentes phases d’un cycle de développement",
          acquired: ["Capable d’élaborer un cycle de développement complet"],
          not_acquired: [],
          in_progress: [
            "Capable d’identifier les acteurs",
            "Capable d’identifier les différentes phases",
          ],
          traces: [],
        },
      ],
      sources: [
        {
          title: "Cahier des Charges",
          url: "https://docs.google.com/document/d/1VqXcn_AJqbqxXlhRfYWskVzxp06KnunuFcm1p5-VWGk/edit?usp=sharing",
          desc: "",
        },
      ],
    },
    {
      abilitie: "Compétence 6 : Collaborer au sein d’une équipe informatique",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Appréhender l’écosystème numérique",
          acquired: [
            "Capable d’identifier les rôles et les fonctions d’une équipe informatique",
          ],
          not_acquired: [],
          in_progress: [
            "Capable d’exploiter une équipe de manière efficace et pertinente.",
          ],
          traces: [],
        },
        {
          name: "Apprentissage Critique 2 : Découvrir les aptitudes requises selon les différents secteurs informatiques",
          acquired: [
            "Capable de lier les aptitudes requises en fonction des différents secteurs informatiques",
          ],
          not_acquired: [],
          in_progress: [
            "Comprend les tendances et les différentes enjeux des secteurs informatiques ",
          ],
          traces: [],
        },
        {
          name: "Apprentissage Critique 3 : Identifier les statuts, les fonctions et les rôles de chaque membres d’une équipe pluridisciplinaire",
          acquired: [
            "L’équipe est bien répartie selon leurs fonctions, les statuts et les rôles selon leurs compétences.",
          ],
          not_acquired: [],
          in_progress: ["Mauvaise estimation de ses compétences"],
          traces: [],
        },
        {
          name: "Apprentissage Critique 4 : Acquérir les compétences interpersonnelles pour travailler en équipe",
          acquired: [
            "Les travaux sont aboutis",
            "L’équipe décide d’un commun accord",
          ],
          not_acquired: [],
          in_progress: ["Le projet est mal organisé"],
          traces: [],
        },
      ],
      sources: [
        {
          title: "Cahier des Charges",
          url: "https://docs.google.com/document/d/1VqXcn_AJqbqxXlhRfYWskVzxp06KnunuFcm1p5-VWGk/edit?usp=sharing",
          desc: "",
        },
      ],
    },
    {
      abilitie: "Compétence 7 : Culture Générale",
      critical_learning: [
        {
          name: "Actualités",
          acquired: [
            "Peut converser aisément sur quelques actualités telles que le Festival de Cannes, les récents Films, les polémiques, etc...",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "Actualités",
              desc: [
                "Le journaliste Hugo Décrypte, présent sur les réseaux sociaux (Instagram, YouTube, Tik Tok), propose différents formats tel que des formats de 2 minutes présentant les nouvelles chaque jour. J’ai donc regardé et écouté ces formats tous les jours afin de m’informer.",
                "Rubriques actualités de Google proposées directement sur le téléphone qui informe des actualités par rapport à vos préférences.",
              ],
            },
          ],
        },
        {
          name: "Langue Vivante Anglaise",
          acquired: [
            "Peut converser en anglais",
            "Capable de construire des phrases complexes",
            "Comprendre l’écrit",
          ],
          not_acquired: [],
          in_progress: [
            "Peut résumer une brève écoute orale ",
            "Ecoute et regarde une série ou un film avec sous titres",
          ],
          traces: [
            {
              name: "Langue Vivante Anglaise",
              desc: [
                "Duolingo : Cours de 20 minutes tous les jours. Travail l’anglais écrit et oral.",
                "Netflix : Regarder les séries et films en anglais sous-titrés pour s’améliorer à la compréhension orale qui est une de mes grandes lacunes.",
              ],
            },
          ],
        },
        {
          name: "Culture cinématographique",
          acquired: [
            "Connais les films de l’années et les classiques",
            "Capable de reconnaître des stars du cinéma",
            "Capable de donner un avis constructif sur une large plage de films connus",
          ],
          not_acquired: [],
          in_progress: [
            "Peux évoquer des scénaristes et des acteurs fin de pouvoir construire un avis.",
          ],
          traces: [
            {
              name: "Culture cinématographique",
              desc: [
                "Le journal Hugo Décrypte fait aussi des formats vidéos mettant en avant des personnes connues tels que des acteurs à l’occasion du festival de Cannes.",
                "Aller voir le programme du cinéma toutes les semaines pour voir les nouveautés et aller voir les plus intéressants/ les classiques/ les plus connus.",
                "Regarder les films en DVD de ma famille, les films retranscrit en livres ou sous les conseils de proches.",
              ],
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

export default YearOne;
