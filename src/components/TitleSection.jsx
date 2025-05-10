import { Typography, Box } from "@mui/material";

export default function HeroSection({
  subheading,
  heading,
  highlight,
  description,
  sxDescription,
}) {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: "14px",
          textTransform: "uppercase",
          color: "#888",
          letterSpacing: 1,
          mb: 1,
        }}
      >
        {subheading}
      </Typography>

      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "32px", md: "48px" },
        }}
      >
        {heading}
        <Typography
          component="span"
          sx={{
            display: "block",
            color: "#24D366",
            fontSize: { xs: "32px", md: "48px" },
          }}
        >
          {highlight}
        </Typography>
      </Typography>

      <Typography
        sx={{
          mt: 2,
          color: "#c5c5c5",
          fontSize: { xs: "16px", md: "18px" },
          maxWidth: "700px",
          mx: "auto",
          fontWeight: 300,
          ...sxDescription,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
