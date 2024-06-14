import React from "react";
import { Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Profile({ theme }) {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        className="parcours-title"
        style={{
          fontFamily: "Amatic SC",
          fontSize: "40px",
          textAlign: "center",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Mon Profil Professionnel{" "}
      </Typography>
      <Typography
        style={{
          fontFamily: "Sometype Mono",
          fontSize: "15px",
          textAlign: "justify",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Lors de ma formation en BUT Informatique spécialisée dans la
        réalisation, la conception, le développement ainsi que la validation
        d'application, j'ai eu l'occasion de me développer une expérience
        professionnelle. Que ce soit par le biais de mon alternance en tant que
        développeur web junior ou en prennant contact avec certains
        professionnels du métier tel qu'un développeur logiciel Java ou un chef
        de projet informatique. Cela m'a permis de m'informer et de m'orienter
        sur mon avenir professionnel. <br /> <br />
        Lors de cette formation, j'ai aussi eu l'occasion de pousser ma
        reflexion sur mon profil professionnel. J'y ai notamment découvert que
        je me passionne pour le développement de programmes optimisés,
        j'aimerais donc me spécialiser dans l'application des design patterns en
        programmation orientée objet pour créer des solutions robustes et
        maintenables mêlant programmation, esthétique et ergonomie pour offrir
        les meilleures expériences possibles. Je suis par ailleurs
        particulièrement attiré par le développement d'applications mobiles, où
        je peux exprimer pleinement ma créativité tout en respectant les
        meilleures pratiques du secteur. <br /> <br /> Mon projet principal pour
        mon avenir était de poursuivre mes études en Master Informatique en
        alternance pour développer mes compétences en Gestion de Projet et
        accéder à un poste à responsabilité. Cependant, l'idée de faire une
        école d'ingénieur n'est pas exclu. En effet, une école d'ingénieur me
        permettra aussi d'acquérir de compétences en gestion de projet mais
        aussi une expérience à l'étranger et développer mes compétences
        logiciel. En somme, je souhaite continuer mes études pour approfondir
        mes compétences avant de m'insérer dans le monde du travail.
      </Typography>
      <div className="buttons-download">
        <Button
          className="btn-download"
          startIcon={<DownloadIcon />}
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "auto",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
          component="a"
          href={`${process.env.PUBLIC_URL}/cv.pdf`}
          download="cv.pdf"
        >
          Voir mon CV
        </Button>
        <Button
          className="btn-download"
          startIcon={<DownloadIcon />}
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "auto",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
          component="a"
          href={`${process.env.PUBLIC_URL}/enquetes_metiers.pdf`}
          download="enquetes_metiers.pdf"
        >
          Voir mes enquêtes métiers
        </Button>
        <Button
          className="btn-download"
          startIcon={<DownloadIcon />}
          sx={{
            backgroundColor: theme === "light" ? "#EEEBEB" : "#1C1C1C",
            color: "#4F4F4F",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            width: "auto",
            "&:hover": {
              backgroundColor: theme === "light" ? "#EFE2E2" : "#171717",
              color: "#4F4F4F",
            },
          }}
          component="a"
          href={`${process.env.PUBLIC_URL}/profil_pro.pdf`}
          download="profil_pro.pdf"
        >
          Mon profil professionnel Infographie
        </Button>
      </div>
    </div>
  );
}

export default Profile;
