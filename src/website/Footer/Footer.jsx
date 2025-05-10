import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AnimatedComponent from "../../AnimatedComponent";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0A0A0A, #101624)",
        color: "#fff",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <AnimatedComponent yOffset={50} delay={0}>
        <Container maxWidth="xl">
          {/* Main Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: { xs: 3, md: 5 },
              mt: { xs: 4, md: 8 },
            }}
          >
            {/* Brand Info */}
            <Box
              sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: 200 },
                mb: { xs: 3, md: 0 },
              }}
            >
              <Box
                component={"img"}
                src="../../image/logo.png"
                width={100}
                mb={2}
                sx={{ mx: { xs: "auto", md: 0 }, display: "block" }}
              />
              <Typography
                variant="body2"
                color="#ccc"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                The most powerful WhatsApp API platform for businesses of all
                sizes. Send unlimited messages with no per-message fees.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                mt={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <IconButton sx={{ color: "#ccc" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: "#ccc" }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: "#ccc" }}>
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Links Sections */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                gap: { xs: 3, sm: 5, md: 0 },
                width: { xs: "100%", md: "auto" },
                justifyContent: { sm: "space-between", md: "flex-start" },
                flex: { md: 2 },
              }}
            >
              {/* Product Links */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 150,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2 }}
                  fontWeight="bold"
                  gutterBottom
                >
                  Product
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="#ccc" underline="hover">
                    Features
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Pricing
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Documentation
                  </Link>
                </Stack>
              </Box>

              {/* Company Links */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 150,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2 }}
                  fontWeight="bold"
                  gutterBottom
                >
                  Company
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="#ccc" underline="hover">
                    About Us
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Blog
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Contact
                  </Link>
                </Stack>
              </Box>

              {/* Resources Links */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 150,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2 }}
                  fontWeight="bold"
                  gutterBottom
                >
                  Resources
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" color="#ccc" underline="hover">
                    Help Center
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Terms of Service
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Privacy Policy
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Refund Policy
                  </Link>
                  <Link href="#" color="#ccc" underline="hover">
                    Partner Program
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* Contact Info - Responsive Version */}
          <Box
            mt={{ xs: 4, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { sm: "center" },
              justifyContent: { sm: "center" },
              gap: { xs: 2, sm: 4, md: 6 },
              py: { xs: 3, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon
                sx={{ color: "#aaa", fontSize: { xs: "1rem", sm: "1.25rem" } }}
              />
              <Typography variant="body2" color="#ccc">
                contact@wasenderapi.com
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon
                sx={{ color: "#aaa", fontSize: { xs: "1rem", sm: "1.25rem" } }}
              />
              <Typography variant="body2" color="#ccc">
                +20 3807 8513
              </Typography>
            </Stack>

            {!isMobile && (
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon
                  sx={{
                    color: "#aaa",
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                  }}
                />
                <Typography variant="body2" color="#ccc">
                  71-75 Shelton Street, London
                </Typography>
              </Stack>
            )}
          </Box>

          {/* Footer Bottom */}
          <Box mt={{ xs: 3, md: 4 }} textAlign="center">
            <Typography variant="body2" color="#777">
              © {new Date().getFullYear()} WasenderAPI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </AnimatedComponent>
    </Box>
  );
}
