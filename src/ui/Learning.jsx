import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

function Learning({
  name,
  acquired,
  not_acquired,
  in_progress,
  traces,
  theme,
}) {
  const themeMUI = useTheme();
  const isMobile = useMediaQuery(themeMUI.breakpoints.down("sm"));

  return (
    <div className="learning">
      {isMobile ? (
        <Typography
          variant="h6"
          style={{
            color:
              theme === "light"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            fontSize: "17px",
            fontFamily: "Sometype Mono",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {name}
        </Typography>
      ) : (
        <Typography
          variant="h6"
          style={{
            color:
              theme === "light"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            fontSize: "25px",
            fontFamily: "Sometype Mono",
          }}
        >
          {name}
        </Typography>
      )}

      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Sometype Mono",
              backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
              border: "solid 1px #868688",
              padding: "10px",
            }}
          >
            Acquis
          </Typography>
          {acquired.map((acq, index) => (
            <Typography
              key={index}
              style={{
                fontFamily: "Sometype Mono",
                backgroundColor:
                  theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                border: "solid 1px #868688",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              &gt; {acq}
            </Typography>
          ))}

          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Sometype Mono",
              backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
              border: "solid 1px #868688",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            En cours d'acquisition
          </Typography>
          {in_progress.map((acq, index) => (
            <Typography
              key={index}
              style={{
                fontFamily: "Sometype Mono",
                backgroundColor:
                  theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                border: "solid 1px #868688",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              &gt; {acq}
            </Typography>
          ))}

          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Sometype Mono",
              backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
              border: "solid 1px #868688",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            Non acquis
          </Typography>
          {not_acquired.map((acq, index) => (
            <Typography
              key={index}
              style={{
                fontFamily: "Sometype Mono",
                backgroundColor:
                  theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                border: "solid 1px #868688",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              &gt; {acq}
            </Typography>
          ))}
        </div>
      ) : (
        <table
          style={{ border: "solid 1px #868688", fontFamily: "Sometype Mono" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "solid 1px #868688",
                  backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
                }}
              >
                Acquis
              </th>
              <th
                style={{
                  border: "solid 1px #868688",
                  backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
                }}
              >
                En cours d'acquisition
              </th>
              <th
                style={{
                  border: "solid 1px #868688",
                  backgroundColor: theme === "light" ? "#D2CECE" : "#252527",
                }}
              >
                Non acquis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "solid 1px #868688",
                  backgroundColor:
                    theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                }}
              >
                {acquired.map((acq, index) => (
                  <Typography
                    key={index}
                    style={{ fontFamily: "Sometype Mono" }}
                  >
                    &gt; {acq}{" "}
                  </Typography>
                ))}
              </td>
              <td
                style={{
                  border: "solid 1px #868688",
                  backgroundColor:
                    theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                }}
              >
                {in_progress.map((acq, index) => (
                  <Typography
                    key={index}
                    style={{ fontFamily: "Sometype Mono" }}
                  >
                    &gt; {acq}{" "}
                  </Typography>
                ))}
              </td>
              <td
                style={{
                  border: "solid 1px #868688",
                  backgroundColor:
                    theme === "light" ? "#EEEBEB" : "rgb(37, 37, 39, 0.34)",
                }}
              >
                {not_acquired.map((acq, index) => (
                  <Typography
                    key={index}
                    style={{ fontFamily: "Sometype Mono" }}
                  >
                    &gt; {acq}{" "}
                  </Typography>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {traces.length > 0 && (
        <>
          <Typography
            style={{ fontWeight: "bold", marginTop: "25px", fontSize: "25px" }}
          >
            Traces :
          </Typography>
          {traces.map((trace, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "15px",
                  fontFamily: "Sometype Mono SemiBold",
                }}
              >
                &gt; {trace.name}
              </Typography>
              {trace.desc.map((desc, index) => (
                <Typography
                  key={index}
                  style={{ marginLeft: "35px", fontFamily: "Sometype Mono" }}
                >
                  &gt; {desc}
                </Typography>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Learning;
