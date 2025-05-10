import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function CustomButton({ label, sx, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      component={Link}
      to={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variant="contained"
      sx={{
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "none",
        px: { xs: 1.5, md: 3 },
        py: { xs: 1, md: 1.5 },
        ...sx,
      }}
      endIcon={
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.3s",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          <ArrowForwardIcon />
        </Box>
      }
    >
      {label}
    </Button>
  );
}
