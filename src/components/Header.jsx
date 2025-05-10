import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import CustomButton from "./CustomButton";

const navigationItems = [
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  const location = useLocation();

  // Scroll on hash when landing on home page
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1); // remove the '#' character
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home with hash
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AppBar
      color="default"
      sx={{
        transition: "0.2s",
        backgroundColor: "rgba(10,10,10,1)",
        backdropFilter: "blur(2px)",
        boxShadow: "none",
        py: { xs: 1, md: 2 },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      position="fixed"
      elevation={1}
      component="header"
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 0, md: 2 } }}>
          {/* Logo */}
          <Box
            component="img"
            src="../../image/logo.png"
            alt="logo"
            sx={{
              width: { xs: 70, sm: 80, md: 100 },
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => scrollToSection("home")}
          />

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: 2, lg: 3 },
            }}
          >
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: "#A9A9A9",
                  textTransform: "none",
                  fontSize: { md: "0.9rem", lg: "1rem" },
                  transition: "0.3s",
                  "&:hover": { color: "white" },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              href="/documentation"
              sx={{
                color: "#A9A9A9",
                textTransform: "none",
                fontSize: { md: "0.9rem", lg: "1rem" },
                transition: "0.3s",
                "&:hover": { color: "white" },
              }}
            >
              Documentation
            </Button>
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1.5, md: 2 },
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              component={Link} // استخدم Link هنا
              to="/signin"
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                textTransform: "none",
                padding: { xs: "4px 8px", sm: "6px 12px" },
              }}
            >
              Login
            </Button>
            <CustomButton
              sx={{ backgroundColor: "white", color: "black" }}
              label="Get Started"
              link={"/signup"}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
