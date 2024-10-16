import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const InfoCard = ({ icon, title, content, titleColor }) => {
  return (
    <Card
      sx={{
        backgroundImage: "linear-gradient( #181818, #0e0d0d, #281818)",
        color: "white",
        borderRadius: "10px",
        border: "1px solid #2f2f2f",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        width: "200px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <div style={{ color: "#ff7b54", fontSize: "40px" }}>{icon}</div>
        <Typography
          component="p"
          sx={{ fontWeight: "bold" }}
          style={{ color: titleColor }}
        >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
