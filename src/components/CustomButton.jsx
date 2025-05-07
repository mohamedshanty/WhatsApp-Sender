import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CustomButton({
  label,
  background,
  color,
  backgroundGradient,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variant="contained"
      sx={{
        backgroundColor: { background },
        backgroundImage: backgroundGradient,
        color: { color },
        borderRadius: "12px",
        fontWeight: "bold",
        textTransform: "none",
        px: 3,
        py: 1.5,
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
