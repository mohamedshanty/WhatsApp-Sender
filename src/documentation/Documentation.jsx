import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "reactstrap";
import { useMediaQuery, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

export default function Documentation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - 280px)` },
          height: "100vh",
          background: "linear-gradient(to bottom, #0A0A0A, #101624)",
          color: "#ccc",
        }}
      >
        <Container maxWidth="lg">
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                position: "fixed",
                right: 20,
                top: 90,
                zIndex: theme.zIndex.drawer + 1,
                backgroundColor: "background.paper",
                boxShadow: 1,
              }}
            >
              <Menu />
            </IconButton>
          )}
          <Outlet />
        </Container>
      </Box>
    </Box>
    // <Box>
    //   <Header />
    //   <SideBar />
    //   <Box
    //     component="main"
    //     sx={{
    //       flexGrow: 1,
    //       pl: "240px",
    //       background: "linear-gradient(to bottom, #0A0A0A, #101624)",
    //       height: "100vh",
    //     }}
    //   >
    //     <Toolbar />
    //     <Outlet />
    //   </Box>
    // </Box>
  );
}
