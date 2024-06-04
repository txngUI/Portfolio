import React from "react";
import { Typography } from "@mui/material";

function Titles({ theme }) {
  return (
    <div style={{ marginTop: "25px" }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Amatic SC",
          fontSize: "60px",
          textAlign: "center",
        }}
      >
        TANGUY DAVID
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Sometype Mono",
          fontSize: "20px",
          textAlign: "center",
          color: theme === "light" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
          marginTop: "20px",
        }}
      >
        &lt; Developper Web & Mobile /&gt;
      </Typography>
    </div>
  );
}

export default Titles;
