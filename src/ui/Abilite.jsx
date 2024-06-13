import React from "react";
import {
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Learning from "./Learning";

function Abilitie({ theme, abilitie, critical_learning, sources }) {
  return (
    <div className="abilitie">
      <Typography
        style={{
          fontSize: "36px",
          fontFamily: "Amatic SC",
          textAlign: "center",
        }}
      >
        {abilitie}
      </Typography>
      {critical_learning.map((learning, index) => (
        <Learning
          theme={theme}
          key={index}
          name={learning.name}
          acquired={learning.acquired}
          in_progress={learning.in_progress}
          not_acquired={learning.not_acquired}
          traces={learning.traces}
        />
      ))}
      {sources.length > 0 && (
        <>
          <Typography
            style={{
              fontSize: "35px",
              textAlign: "center",
              fontFamily: "Amatic SC",
            }}
          >
            Sources
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {sources.map((source, index) => (
              <div key={index} style={{ marginBottom: "25px" }}>
                <div
                  className="source"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    className="source-title"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Sometype Mono",
                      textAlign: "left",
                      color:
                        theme === "light"
                          ? "rgba(0,0,0,0.5)"
                          : "rgba(255,255,255)",
                      marginRight: "10px",
                    }}
                  >
                    &gt; {source.title}
                  </Typography>
                  <Button
                    component="a"
                    href={source.url}
                    target="_blank"
                    sx={{
                      backgroundColor:
                        theme === "light" ? "#EEEBEB" : "#1C1C1C",
                      color: "#4F4F4F",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      "&:hover": {
                        backgroundColor:
                          theme === "light" ? "#EFE2E2" : "#171717",
                        color: "#4F4F4F",
                      },
                      height: "40px",
                    }}
                  >
                    Voir la source
                  </Button>
                </div>
                {source.desc && source.desc.trim() !== "" && (
                  <Typography
                    style={{
                      fontSize: "15px",
                      fontFamily: "Sometype Mono",
                      textAlign: "left",
                      color:
                        theme === "light"
                          ? "rgba(0,0,0,0.5)"
                          : "rgba(255,255,255)",
                      marginLeft: "20px",
                    }}
                  >
                    &gt; {source.desc}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Abilitie;
