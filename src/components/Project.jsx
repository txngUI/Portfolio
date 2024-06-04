import React from "react";
import { Typography } from "@mui/material";
import ProjectContainer from "../ui/ProjectContainer";
import champsEtCie from "../assets/champsEtCie.png";
import pokedex from "../assets/pokedex.png";
import portfolio from "../assets/portfolio.png";
import javaImage from "../assets/java.png";
import androidStudioImage from "../assets/android-studio.png";
import react from "../assets/react.png";
import vscode from "../assets/vscode.png";

function Project({ theme }) {
  return (
    <div className="project">
      <Typography
        variant="h4"
        style={{
          borderLeft: theme === "light" ? "1px solid black" : "1px solid white",
          width: "100%",
          textAlign: "left",
          paddingLeft: "15px",
          fontFamily: "Sometype Mono",
        }}
      >
        Mes projets
      </Typography>
      <ProjectContainer
        theme={theme}
        image={champsEtCie}
        title="Champs&Cie"
        desc="> Application mobile android utilisant l’API League Of Legends permettant la récolte et l’affichage des informations de chaque champion du jeu."
        icones={[
          { src: javaImage, alt: "Java" },
          { src: androidStudioImage, alt: "Android Studio" },
        ]}
        link="https://github.com/txngUI/ChampsEtCie"
      />
      <ProjectContainer
        theme={theme}
        image={portfolio}
        title="Portfolio"
        desc="> Site web portfolio de mon profil permettant aussi à l’accès de mon portolio universitaire."
        icones={[
          { src: react, alt: "React" },
          { src: vscode, alt: "VS Code" },
        ]}
      />{" "}
      <ProjectContainer
        theme={theme}
        image={pokedex}
        title="Pokedex"
        desc="> Projet web réalisé dans le cadre de mes études permettant la création d’un compte “Dresseur” et d’un pokedex avec la possibilité d’ajouter ou supprimer un pokémon. L’application interroge avec l’api pokemon Axios."
        icones={[
          { src: react, alt: "React" },
          { src: vscode, alt: "VS Code" },
        ]}
      />
    </div>
  );
}

export default Project;
