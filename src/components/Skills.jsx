import React from "react";
import { Typography, Chip } from "@mui/material";
import ChipContainer from "../ui/ChipContainer";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function Skills({ theme }) {
  return (
    <div className="skills">
      <Typography
        className="skills-title"
        variant="h4"
        style={{
          borderLeft: theme === "light" ? "1px solid black" : "1px solid white",
        }}
      >
        Skills
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "50px",
        }}
      >
        <ChipContainer
          elements={["HTML", "CSS", "JavaScript", "React", "Symfony"]}
          theme={theme}
          style={{ width: "80%" }}
        />

        <ChipContainer
          elements={["Android Studio", "Intellij IDEA", "XML", "Figma", "PHP"]}
          theme={theme}
          style={{ width: "95%" }}
        />

        <ChipContainer
          elements={["VS Code", "Git", "Python", "Power BI", "SQL"]}
          theme={theme}
          style={{ width: "95%" }}
        />

        <ChipContainer
          elements={["PostgreSQL", "Excel", "NextJS", "Kotlin"]}
          theme={theme}
          style={{ width: "80%" }}
        />
      </div>
    </div>
  );
}

export default Skills;
