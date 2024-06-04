import React from "react";
import { Chip } from "@mui/material";

function ChipContainer({ elements, theme = "light", style }) {
  return (
    <div className="chip-container" style={{...style }}>
      {elements.map((element, index) => (
        <Chip
          key={index}
          style={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color:
              theme === "light"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
          }}
          label={element}
        />
      ))}
    </div>
  );
}

export default ChipContainer;
