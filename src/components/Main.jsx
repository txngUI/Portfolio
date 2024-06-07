import React from "react";
import { Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";
import Titles from "../ui/Titles";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Main = ({ theme, toggleTheme }) => {
  return (
    <div className="App" style={{ marginBottom: "20px" }}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
        }}
      >
        <img
          alt="Toggle theme icon"
          src={theme === "light" ? Moon : Sun}
          style={{ width: "20px", height: "20px" }}
        />
      </button>
      <Titles theme={theme} />
      <About theme={theme} />
      <div className="btn">
        <Button
          startIcon={<DownloadIcon />}
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
          component="a"
          href="/cv.pdf"
          download="cv.pdf"
        >
          CV
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          component="a"
          href="https://github.com/txngUI"
          target="_blank"
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
        >
          @txngUI
        </Button>
      </div>
      <Project theme={theme} />
      <div className="btn">
        <Button
          startIcon={<GitHubIcon />}
          component="a"
          href="https://github.com/txngUI?tab=repositories"
          target="_blank"
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
        >
          Autres projets
        </Button>
      </div>
      <div>
        <Skills theme={theme} />
      </div>
      <Typography
        style={{
          width: "100%",
          textAlign: "center",
          color: "#9D9999",
          paddingTop: "75px",
        }}
      >
        © 2024 by Tanguy DAVID. All rights reserved.
      </Typography>
    </div>
  );
};

export default Main;
