import React, { useState } from "react";
import Abilitie from "../ui/Abilite";

function YearTwo({ theme }) {
  const abilities = [
    {
      abilitie: "Compétence 1 : Réaliser un développement d’application",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
          acquired: [
            "Capacité à comprendre et documenter les besoins des utilisateurs.",
            "Rédaction claire et précise des spécifications fonctionnelles et non fonctionnelles.",
            "Implémentation des spécifications dans le code.",
            "Utilisation d'outils de gestion des exigences tels que Trello.",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à élaborer des diagrammes  de spécifications fonctionnelles et non fonctionnelles (de classes, d’activités)",
          ],
          traces: [
            {
              name: "Alternance",
              desc: ["utilisation de trello"],
            },
            {
              name: "R3.03 : Analyse",
              desc: ["Diagrammes d’activités, de classe, de séquences"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Appliquer des principes d’accessibilité et d’ergonomie ",
          acquired: [
            "Conception de l’interface utilisateur avec une attention particulière à l'ergonomie.",
          ],
          not_acquired: [],
          in_progress: [
            "Réception des feedbacks utilisateurs et ajustement en conséquence.",
          ],
          traces: [
            {
              name: "Alternance",
              desc: ["mise en place d’une enquête de satisfaction"],
            },
            {
              name: "Application android",
              desc: ["conception d’une interface ergonomique"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Adopter de bonnes pratiques de conception et de programmation",
          acquired: [
            "Utilisation de standards de codage (naming conventions, code comments).",
            "Application des principes SOLID.",
            "Réalisation de revues de code régulières.",
          ],
          not_acquired: [],
          in_progress: [
            "Implémentation de tests unitaires et d'intégration.",
            "Utiliser un modèle MVC.",
          ],
          traces: [
            {
              name: "R4.02 : Qualité Dév Tests",
              desc: ["Implémentation de tests"],
            },
            {
              name: "R3.04 : Qualité de Dév",
              desc: ["SOLID avec POO"],
            },
            {
              name: "Application android",
              desc: ["test unitaires et standards de codage"],
            },
            {
              name: "Game Collection",
              desc: [" utiliser le modèle MVC"],
            },
            {
              name: "Alternance",
              desc: ["utiliser le modèle MVC"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Utiliser des patrons de conception pour le développement d’applications cohérentes",
          acquired: [
            "Capacité à identifier les situations où un pattern spécifique est approprié.",
            "Documentation et justification de l'utilisation de patterns dans le projet.",
          ],
          not_acquired: [],
          in_progress: [
            "Connaissance et utilisation de patterns tels que Singleton, Factory, Observer, etc.",
          ],
          traces: [
            {
              name: "R3.04 : Qualité de Dév",
              desc: [
                "Apprendre à documenter correctement son code",
                "Apprendre les différents designs patterns",
              ],
            },
            {
              name: "Application android",
              desc: [
                "utilisation de design patterns (MVC, Singleton, Observer, etc.)",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 5 : Adapter les solutions existantes au contexte applicatif",
          acquired: [
            "Capacité à analyser le code existant et comprendre sa logique.",
            "Personnalisation de frameworks ou bibliothèques pour un usage spécifique.",
            "Intégration de modules ou services tiers dans l’application.",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: " R4.01 : Architecture Logicielle",
              desc: [
                "Développer un site e-commerce avec Symphony en reprenant un début de projet déjà réalisé.",
              ],
            },
            {
              name: "Application android",
              desc: ["utilisation d’API Rest"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 6 : Vérifier et valider la qualité de l’application par les tests",
          acquired: [
            "Développement de tests unitaires, d’intégration et fonctionnels.",
            "Utilisation d’outils d’automatisation de tests (Selenium, JUnit, etc.).",
            "Réalisation de tests de performance et de sécurité.",
          ],
          not_acquired: [],
          in_progress: [
            "Analyse des résultats de tests et correction des bugs.",
          ],
          traces: [
            {
              name: "R4.02 : Qualité Dév Tests",
              desc: [
                "Implémentation de tests avec Selenium et faire des compte rendus à l’aide du logiciel Dolibarr",
              ],
            },
          ],
        },
      ],
      sources: [
        {
          title: "Projet Game Collection",
          url: "https://github.com/txngUI/game_collection",
          desc: "Réalisation d'une application de gestion de collection de jeux vidéos en utilisant les principes SOLID et les designs patterns pour faciliter l'ajout de nouvelles fonctionnalités et la maintenance du code.",
        },
        {
          title: "Site E-commerce Symphony",
          url: "https://github.com/txngUI/e-commerce-website",
          desc: "Développement d'un site e-commerce en utilisant le framework Symphony et en reprenant un début de projet déjà réalisé pour s'adapter au contexte applicatif et comprendre la logique du code existant.",
        },
        {
          title: "Application android",
          url: "https://github.com/txngUI/ChampsEtCie",
          desc: "Réalisation d'une application android en utilisant des tests unitaires, d'intégration et fonctionnels pour vérifier et valider la qualité de l'application.",
        },
      ],
    },
    {
      abilitie: "Compétence 2 : Optimiser des applications",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Choisir des structures de données complexes adaptées au problème",
          acquired: [
            "Connaissance des structures de données avancées (arbres, graphes, tables de hachage, etc.).",
            "Mise en œuvre correcte des structures de données choisies.",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à analyser les besoins en termes de performance et de complexité.",
            "Utilisation efficace des structures pour résoudre des problèmes complexes.",
          ],
          traces: [
            {
              name: "R3.02 : Développement Efficace",
              desc: [
                "Optimisation et analyse des performance et de la complexité",
              ],
            },
            {
              name: "R3.09 : Cryptographie et sécurité",
              desc: ["Table de hachage"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...) ",
          acquired: [
            "Capacité à choisir l'algorithme le plus adapté au problème donné.",
            "Implémentation correcte et optimisation des algorithmes choisis.",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "R3.02 : Développement efficace",
              desc: [
                "Optimisation et choix de l’implémentation de l'algorithme",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Appréhender la différence entre les paradigmes de programmation",
          acquired: [
            "Connaissance des principaux paradigmes de programmation et de leurs caractéristiques.",
            "Utilisation correcte et efficace du paradigme choisi dans le développement.",
            "Capacité à passer d’un paradigme à un autre selon les besoins du projet.",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à identifier le paradigme le plus adapté à un problème donné.",
          ],
          traces: [
            {
              name: "R3.04 : Qualité de Développement",
              desc: ["Apprentissage des différents paradigmes"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Comprendre les enjeux et moyens de sécurisation des données et du code",
          acquired: [
            "Connaissance des principes de sécurité informatique (cryptographie, authentification, autorisation).",
            "Implémentation de mesures de sécurité appropriées (chiffrement, gestion des accès, etc.).",
          ],
          not_acquired: [],
          in_progress: [
            "Réalisation de tests de sécurité et correction des vulnérabilités.",
          ],
          traces: [
            {
              name: "R3.09 : Cryptographie et sécurité",
              desc: ["Sécurité"],
            },
            {
              name: "R4.02 : Qualité Dév Tests",
              desc: ["Implémentation de tests"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 5 : Évaluer l’impact environnemental et sociétal des solutions proposées",
          acquired: [
            "Connaissance des impacts environnementaux et sociétaux liés à l'informatique (consommation énergétique, recyclage, etc.).",
            "Prise en compte de ces impacts dans le processus de développement (choix technologiques, optimisation des ressources).",
          ],
          not_acquired: [],
          in_progress: [
            "Utilisation d'outils et de méthodes pour évaluer et réduire l’empreinte écologique des applications.",
            "Promotion des pratiques durables et éthiques dans le développement informatique.",
          ],
          traces: [],
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
        "Compétence 3 : Administrer des systèmes informatiques communicants complexes ",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Concevoir et développer des applications communicantes",
          acquired: [
            "Connaissance des protocoles de communication (HTTP, WebSocket, etc.).",
            "Développement d’API RESTful ou de services web.",
            "Implémentation de mécanismes de communication en temps réel.",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à déboguer et résoudre des problèmes de communication entre applications.",
          ],
          traces: [
            {
              name: "Projet android",
              desc: [
                "utilisation d’une API Rest pour communiquer avec une base de données",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Utiliser des serveurs et des services réseaux virtualisés",
          acquired: [
            "Déploiement d’applications sur des serveurs virtuels.",
            "Utilisation de Virtualbox",
          ],
          not_acquired: [],
          in_progress: ["Configuration et gestion de réseaux virtuels."],
          traces: [
            {
              name: "R4.A.08 Virtualisation",
              desc: [
                "TP Virtual Machine : réaliser un système asker, brainer et memory",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Sécuriser les services et données d’un système ",
          acquired: [
            "Utilisation de techniques de chiffrement des données.",
            "Implémentation de mécanismes d’authentification et d’autorisation.",
          ],
          not_acquired: [],
          in_progress: [
            "Réalisation de tests de sécurité et mise en place de correctifs.",
          ],
          traces: [
            {
              name: "R3.09 Cryptographie et sécurité",
              desc: [
                "TP Cryptologie : réaliser un chiffrement et déchiffrement de message",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Rédiger une documentation technique (en français et en anglais) ",
          acquired: [
            "Rédaction de guides d’utilisation et de manuels techniques.",
            "Documentation des API et des interfaces.",
          ],
          not_acquired: [],
          in_progress: [
            "Utilisation de formats standards pour la documentation (Markdown, Javadoc, etc.).",
            "Capacité à rédiger dans un langage technique précis et compréhensible.",
          ],
          traces: [
            {
              name: "Qualité de développement ",
              desc: ["documenter un projet "],
            },
            {
              name: "Anglais entreprise ",
              desc: ["rédiger des documents techniques en anglais"],
            },
          ],
        },
      ],
      sources: [
        {
          title: "Application android",
          url: "https://github.com/txngUI/ChampsEtCie",
          desc: "Réalisation d'une application android en utilisant des tests unitaires, d'intégration et fonctionnels pour vérifier et valider la qualité de l'application.",
        },
      ],
    },
    {
      abilitie: "Compétence 4 : Gérer des données de l’information",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Optimiser les modèles de données de l’entreprise",
          acquired: [
            "Conception de schémas de bases de données relationnelles et non relationnelles (MongoDB)",
            "Normalisation des bases de données pour éliminer les redondances et incohérences.",
          ],
          not_acquired: [],
          in_progress: [
            "Utilisation de techniques d'indexation et de partitionnement.",
            "Optimisation des requêtes SQL pour améliorer la performance.",
          ],
          traces: [
            {
              name: "R3.07 SQL dans un langage de programmation",
              desc: [
                "Utilisation de techniques d'indexation et de partitionnement.",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Assurer la confidentialité des données (intégrité et sécurité) ",
          acquired: [
            "Implémentation de contrôles d'accès et de permissions.",
            "Utilisation de techniques de chiffrement des données en transit et au repos.",
            "Réalisation d’audits de sécurité et mise en place de stratégies de sauvegarde.",
          ],
          not_acquired: [],
          in_progress: [
            "Application des politiques de gestion des données sensibles et de conformité (RGPD).",
          ],
          traces: [
            {
              name: "Droit des contrats et du numérique",
              desc: ["Droits RGPD et CNIL"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Organiser la restitution de données à travers la programmation et la visualisation ",
          acquired: [
            "Utilisation de langages de programmation pour manipuler et analyser les données (Python, Java, SQL).",
            "Développement de tableaux de bord et de rapports interactifs (Tableau, Power BI).",
            "Création de visualisations de données (graphiques, cartes, diagrammes).",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à interpréter et expliquer les résultats obtenus.",
          ],
          traces: [
            {
              name: "Alternance",
              desc: ["Formation à Power BI"],
            },
            {
              name: "R3.07 SQL dans un langage de programmation",
              desc: ["Partie programmation du langage SQL"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 4 : Manipuler des données hétérogènes",
          acquired: [
            "Utilisation d’outils et de langages pour manipuler des données hétérogènes (JSON, XML, CSV, etc.).",
          ],
          not_acquired: [],
          in_progress: [
            "Capacité à extraire, transformer et charger (ETL) des données de différentes sources.",
          ],
          traces: [
            {
              name: "Projet android",
              desc: [
                "Manipuler des données JSON avec l’api",
                "utilisation de xml pour créer le pattern",
              ],
            },
          ],
        },
      ],
      sources: [
        {
          title: "Application android",
          url: "https://github.com/txngUI/ChampsEtCie",
          desc: "Réalisation d'une application android en utilisant des tests unitaires, d'intégration et fonctionnels pour vérifier et valider la qualité de l'application.",
        },
      ],
    },
    {
      abilitie: "Compétence 5 : Conduire un projet",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Lancer un nouveau projet",
          acquired: [
            "Élaboration d'un planning initial et définition des jalons clés.",
            "Identification et évaluation des risques potentiels.",
            "Établissement du budget prévisionnel.",
            "Utilisation d'outils de gestion de projet (MS Project, Trello, Asana).",
          ],
          not_acquired: [],
          in_progress: [
            "Identification des parties prenantes et constitution de l'équipe projet.",
          ],
          traces: [
            {
              name: "Alternance",
              desc: ["utilisation de Trello"],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Piloter le maintien d’un projet en condition opérationnelle",
          acquired: [
            "Suivi régulier de l'avancement du projet par rapport au planning.",
            "Gestion des ressources et allocation des tâches.",
            "Mise en place de points de contrôle et de revues de projet",
          ],
          not_acquired: [],
          in_progress: [
            "Communication régulière avec les parties prenantes.",
            "Résolution des problèmes et gestion des risques.",
          ],
          traces: [
            {
              name: "R4.1.09 Management avancé des systèmes d'exploitation",
              desc: [
                "Mise en place d’un ERP selon les différents services possibles d’une entreprise",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 3 : Faire évoluer un système d’information ",
          acquired: [
            "Analyse des besoins et identification des améliorations à apporter.",
            "Utilisation de méthodes agiles pour intégrer les évolutions (Scrum, Kanban).",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "R3.10 Management des systèmes d'information",
              desc: ["Mise en place des méthodes agiles, scrum, kanban"],
            },
          ],
        },
      ],
      sources: [],
    },
    {
      abilitie: "Compétence 6 : Collaborer au sein d’une équipe informatique",
      critical_learning: [
        {
          name: "Apprentissage Critique 1 : Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,…) ",
          acquired: [
            "Connaissance des différentes structures organisationnelles (ESN, DSI, startups, grandes entreprises).",
            "Capacité à identifier les interactions entre les équipes informatiques et les autres départements.",
            "Familiarité avec les différents processus et méthodologies utilisés dans ces structures (ITIL, DevOps, Agile).",
          ],
          not_acquired: [],
          in_progress: [
            "Compréhension des rôles et responsabilités des différentes équipes informatiques.",
          ],
          traces: [
            {
              name: "R4.1.09 Management avancé des systèmes d'exploitation",
              desc: [
                " Réalisation d’un ERP sous méthode AGILE en identifiant les différents rôles d’une équipe informatique",
              ],
            },
          ],
        },
        {
          name: "Apprentissage Critique 2 : Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation ",
          acquired: [
            "Capacité à comprendre rapidement les outils, technologies et méthodologies utilisés par l'équipe.",
            "Participation active aux réunions et aux sessions de formation.",
            "Mise en place de relations de travail positives avec les membres de l'équipe.",
          ],
          not_acquired: [],
          in_progress: [
            "Comprend les tendances et les différentes enjeux des secteurs informatiques ",
          ],
          traces: [],
        },
        {
          name: "Apprentissage Critique 3 : Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
          acquired: [
            "Capacité à communiquer clairement et efficacement avec les membres de l'équipe.",
            "Capacité à donner et à recevoir des feedbacks constructifs.",
            "Mise en œuvre de méthodes agiles (Scrum, Kanban) pour améliorer la collaboration et la productivité de l'équipe.",
          ],
          not_acquired: [],
          in_progress: [
            "Participation active aux réunions de l'équipe et aux sessions de brainstorming.",
          ],
          traces: [],
        },
        {
          name: "Apprentissage Critique 4 : Rendre compte de son activité professionnelle",
          acquired: [
            "Rédaction de rapports d'avancement et de bilans de projet.",
            "Capacité à utiliser des outils de suivi et de gestion de projet pour documenter les tâches et les progrès.",
            "Présentation régulière de l'avancement du travail lors des réunions d'équipe.",
          ],
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
          name: "Géographie",
          acquired: ["Situes tout les départements de France"],
          not_acquired: [],
          in_progress: ["Connaître les vins des régions de France"],
          traces: [
            {
              name: "",
              desc: [
                "Géoguessr : Jeu en ligne qui permet de découvrir des lieux du monde entier et de tester ses connaissances en géographie.",
                "Carte des vins de France ",
              ],
            },
          ],
        },
        {
          name: "Langues Vivantes",
          acquired: ["Lire un livre en anglais"],
          not_acquired: [],
          in_progress: ["Apprendre l'espagnol", "apprendre l'allemand"],
          traces: [
            {
              name: "",
              desc: [
                "Duolingo : Cours de 20 minutes tous les jours. Travail l’anglais, espagnol et allemand écrit et oral.",
                "Lire Alice au Pays des Merveilles en anglais.",
              ],
            },
          ],
        },
        {
          name: "Politique",
          acquired: [
            "Connais les différents partis politiques français",
            "Connais les programmes des différents parties politiques",
          ],
          not_acquired: [],
          in_progress: [],
          traces: [
            {
              name: "",
              desc: [
                "Le journal Hugo Décrypte : Chaîne Youtube qui explique l’actualité politique de manière simple et pédagogique.",
                "Les programmes officiels des partis politiques",
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

export default YearTwo;
