import React from "react";
import { Typography } from "@mui/material";
import WordCloud from "react-wordcloud";

function Skills({ theme }) {
  const words = [
    { text: "HTML", value: 50 },
    { text: "CSS", value: 50 },
    { text: "JavaScript", value: 70 },
    { text: "React", value: 70 },
    { text: "Symphony", value: 50 },
    { text: "Android Studio", value: 50 },
    { text: "Intellij IDEA", value: 30 },
    { text: "XML", value: 20 },
    { text: "Figma", value: 60 },
    { text: "PHP", value: 70 },
    { text: "VS Code", value: 60 },
    { text: "Git", value: 40 },
    { text: "Python", value: 40 },
    { text: "Power BI", value: 30 },
    { text: "SQL", value: 60 },
    { text: "PostgreSQL", value: 50 },
    { text: "Next JS", value: 30 },
    { text: "Java", value: 80 },
    { text: "Kotlin", value: 50 },
    { text: "Dart", value: 40 },
    { text: "Swift", value: 30 },
  ];

  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [10, 60],
  };

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
        className="skills-container"
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "50px",
        }}
      >
          <WordCloud words={words} options={options}  />
      </div>
    </div>
  );
}

export default Skills;
