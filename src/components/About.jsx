import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import me from "../assets/me_2.jpg";

function About({ theme }) {
  return (
    <div
      className="about"
      style={{
        fontFamily: "Sometype Mono",
        fontSize: "15px",
        borderLeft: theme === "light" ? "1px solid black" : "1px solid white",
        paddingLeft: "15px",
      }}
    >
      <Typography
        variant="h4"
        component="p"
        style={{
          textAlign: "left",
          width: "100%",
          margin: "0",
          fontFamily: "Sometype Mono",
        }}
      >
        A propos
      </Typography>
      <div
      className="about-content"
      >
        <img src={me} alt="Me" style={{ objectFit: "contain", height: "312px", borderRadius: "15px" }} />{" "}
        <Typography
          style={{
            textAlign: "justify",
            color:
              theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            width: "97%",
            margin: "0",
            fontFamily: "Sometype Mono",
            marginLeft: "20px",
          }}
        >
          Jeune développeur de 20 ans et étudiant en BUT Informatique à l’IUT de
          Laval (53), je me passionne dans le développement web et mobile.
          <br />
          <br />
          Je conçois des solutions web en utilisant un large éventail de
          technologies, allant des langages de base tels que HTML, CSS et
          JavaScript, à PHP et divers frameworks comme React, Symfony et
          Next.js.
          <br />
          <br />
          Je maîtrise également la programmation orientée objet ainsi que les
          design patterns, grâce à mon expérience avec les langages Java et
          Python.
          <br />
          <br />
        </Typography>
      </div>
      <Link
        to="/Parcours"
        style={{
          color: theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255)",
          textDecoration: "underline",
        }}
      >
        Voir mon parcours universitaire.
      </Link>
    </div>
  );
}

export default About;
