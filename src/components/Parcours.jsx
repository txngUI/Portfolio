import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";
import YearOne from "./YearOne";
import YearTwo from "./YearTwo";
import YearThree from "./YearThree";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Parcours = ({ theme, toggleTheme }) => {
  const [currentPage, setCurrentPage] = useState("Année 1");

  const pages = [
    { name: "Année 1", component: <YearOne theme={theme} /> },
    { name: "Année 2", component: <YearTwo theme={theme} /> },
    { name: "Année 3", component: <YearThree theme={theme} /> },
    { name: "Profil", component: <Profile theme={theme} /> },
  ];

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
    color: theme === "light" ? "rgb(0,0,0,0.5)" : "#4F4F4F",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    padding: "5px 20px",
    marginRight: "20px",
    "&:hover": {
      backgroundColor: theme === "light" ? "#EFE2E2" : "#242424",
      color: "#4F4F4F",
    },
    fontFamily: "Sometype Mono SemiBold",
    fontSize: "20px",
    height: "50px",
  };

  return (
    <div
      className="parcours"
      style={{
        width: "90vw",
        marginTop: "50px",
      }}
    >
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        style={{ backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C" }}
      >
        <img
          alt="Toggle theme icon"
          src={theme === "light" ? Moon : Sun}
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <Typography
          variant="h4"
          className="parcours-title"
          style={{
            fontFamily: "Amatic SC",
            fontSize: "60px",
            textAlign: "center",
            width: "50%",
            marginBottom: "20px",
          }}
        >
          PORTFOLIO UNIVERSITAIRE
        </Typography>
      </div>
      <Link
        to="/"
        style={{
          color: theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255)",
          fontFamily: "Sometype Mono",
        }}
      >
        &lt; Retour à l'accueil
      </Link>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          marginTop: "50px",
          height: "30px",
          alignItems: "center",
        }}
      >
        {pages.map((page, index) =>
          currentPage === page.name ? (
            <Button
              className="btn-year"
              key={index}
              style={{
                ...buttonStyle,
                backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
                height: "60px",
                width: "300px",
              }}
              onClick={() => setCurrentPage(page.name)}
            >
              {page.name}
            </Button>
          ) : (
            <Button
              className="btn-year"
              key={index}
              style={buttonStyle}
              onClick={() => setCurrentPage(page.name)}
            >
              {page.name}
            </Button>
          )
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        {pages.find((page) => page.name === currentPage)?.component}
      </div>
    </div>
  );
};

export default Parcours;
