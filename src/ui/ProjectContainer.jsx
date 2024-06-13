import React from "react";
import { Typography, Button, Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectContainer({ theme, image, title, desc, icones = [], link, year }) {
  return (
    <div
      className="project-container"
      style={{
        backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
      }}
    >
      <img src={image} alt="Logo" style={{ objectFit: "contain" }} />
      <div className="project-text">
        <Typography
          style={{
            fontFamily: "Sometype Mono",
            fontSize: "25px",
          }}
        >
          {title}
        </Typography>
        <Typography
          className="project-desc"
          style={{
            color:
              theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
          }}
        >
          {desc}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px", // Added margin to separate from the text
          }}
        >
          <Typography
            style={{
              fontFamily: "Sometype Mono",
              fontSize: "15px",
            }}
          >
            Technologies :
          </Typography>
          {icones.map((icon, index) => (
            <Avatar
              key={index}
              variant="rounded"
              src={icon.src}
              alt={icon.alt}
              sx={{ margin: "10px", width: "20px", height: "20px" }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            component="a"
            href={link}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{
              backgroundColor: theme === "light" ? "white" : "#171717",
              color: "#4F4F4F",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginTop: "15px",
              "&:hover": {
                backgroundColor: theme === "light" ? "#EFE2E2" : "#0D0E11",
                color: "#4F4F4F",
              },
            }}
          >
            Voir plus
          </Button>
        </div>
      </div>
      <div className="year" >
        {year.split("").map((char, index) => (
          <p key={index}>{char}</p>
        ))}
      </div>
    </div>
  );
}

export default ProjectContainer;
