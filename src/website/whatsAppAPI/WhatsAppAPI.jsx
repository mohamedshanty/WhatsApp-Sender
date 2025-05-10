import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Container,
  Chip,
  Avatar,
  Fade,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CustomButton from "../../components/CustomButton";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Margin, StarOutline } from "@mui/icons-material";
import TitleSection from "../../components/TitleSection";
import AnimatedComponent from "../../AnimatedComponent";

const features = [
  {
    icon: <GppGoodOutlinedIcon />,
    text: "No credit card required to start",
  },
  {
    icon: <FlashOnOutlinedIcon />,
    text: "2-day free trial with full access",
  },
  {
    icon: <ChatBubbleOutlineOutlinedIcon />,
    text: "Cancel anytime, no commitments",
  },
];

const LoadingBubble = ({ align }) => (
  <Box
    sx={{
      alignSelf: align === "right" ? "flex-end" : "flex-start",
      backgroundColor: align === "right" ? "#e1ffc7" : "#ffffff",
      p: 1.2,
      px: 2,
      borderRadius: "12px",
      borderTopRightRadius: align === "right" ? "4px" : "12px",
      borderTopLeftRadius: align === "left" ? "4px" : "12px",
      maxWidth: "80%",
      boxShadow: "0 0 0 rgba(0,0,0,0.1)",
      mb: 1.5,
    }}
  >
    <Skeleton variant="text" width="60%" height={8} sx={{ mb: 0.5 }} />
    <Skeleton variant="text" width="40%" height={8} />
  </Box>
);

export default function WhatsAppAPI() {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
        py: { xs: 5, sm: 8, md: 10 },
        color: "#fff",
      }}
    >
      <AnimatedComponent yOffset={50} delay={0}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 8, md: 2 }}
            alignItems="center"
            sx={{
              backgroundColor: "#161E2B",
              backdropFilter: "blur(10px)",
              pl: { xs: 3, sm: 5, md: 10 },
              pr: { xs: 3, sm: 5, md: 10, lg: 20, xl: 30 },
              py: { xs: 5, sm: 8, md: 15 },
              borderRadius: { xs: 4, md: 8 },
              mx: { lg: 2, xl: -5 },
            }}
          >
            {/* Left Side */}
            <Stack spacing={3} flex={1}>
              <Chip
                icon={<StarOutline sx={{ color: "#24D366" }} />}
                label="Premium Access"
                sx={{
                  backgroundColor: "#1B3335",
                  color: "#24D366",
                  width: "fit-content",
                }}
              />
              <TitleSection
                subheading={undefined}
                heading={
                  <>
                    Fast, Easy,
                    <br />
                    Affordable{" "}
                    <Box component="span" sx={{ color: "#24D366" }}>
                      WhatsApp
                    </Box>{" "}
                    API
                  </>
                }
                highlight={undefined}
                description={
                  "WasenderAPI is a fast, affordable WhatsApp API for developers. Manage multiple sessions, and scale without per-message fees. Try it free today!"
                }
                sxDescription={{ m: 0 }}
              />
              <Stack spacing={2}>
                {features.map((item, index) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    key={index}
                  >
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(to right, #23D067, #118E7C)",
                        width: 32,
                        height: 32,
                        boxShadow: "0 0 12px rgba(36, 211, 102, 0.6)",
                      }}
                    >
                      {React.cloneElement(item.icon, {
                        sx: { color: "white", fontSize: 20 },
                      })}
                    </Avatar>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ mt: { xs: 3, md: 5 }, pt: { xs: 1, md: 3 } }}>
                <CustomButton
                  label={"Start Your Free Trial"}
                  link={"/signup"}
                  sx={{
                    background: "linear-gradient(to right, #23D067, #118E7C)",
                    color: "white",
                  }}
                />
              </Box>
            </Stack>
            {/* Right Side */}
            <Box
              sx={{
                position: "relative",
                pt: { xs: 0, sm: 5, md: 0 },
                pb: { xs: 3, md: 0 },
                order: { xs: 1, md: 2 },
                width: { xs: "100%", md: "auto" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  position: "relative",
                  width: { xs: "220px", sm: "250px", md: "280px" },
                  aspectRatio: "9 / 16",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "8px solid #1E2939",
                  backgroundColor: "#2f2f2f",
                  boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Gradient background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to right bottom,${hovered ? "#095851" : "#075e54"} , ${hovered ? "#10B8A7" : "#128c7e"})`,
                    opacity: 0.9,
                  }}
                />
                {/* Header */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "48px",
                    transition: "0.5s",
                    backgroundColor: hovered ? "#064E46" : "#075e54",
                    zIndex: 10,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: "white",
                    }}
                  />
                  <Box
                    sx={{
                      height: 8,
                      width: 100,
                      borderRadius: "8px",
                      bgcolor: "rgba(255,255,255,0.7)",
                    }}
                  />
                </Box>
                {/* Chat content */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "48px",
                    bottom: "-60px",
                    left: 0,
                    right: 0,
                    px: 2,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      transition: "transform 0.5s ease",
                      transform: hovered
                        ? "translateY(-60px)"
                        : "translateY(0)",
                    }}
                  >
                    {/* Always visible */}
                    <LoadingBubble align="right" />
                    <LoadingBubble align="left" />

                    {/* Hidden by default, revealed on hover */}
                    <LoadingBubble align="right" />
                    <LoadingBubble align="left" />
                  </Box>
                </Box>
                {/* Footer */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "48px",
                    backgroundColor: hovered ? "#064E46" : "#075e54",
                    zIndex: 10,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.8)",
                    }}
                  />
                  <Box
                    sx={{
                      transition: "0.5s",
                      width: hovered ? "70%" : "75%",
                      height: 24,
                      borderRadius: "16px",
                      bgcolor: "rgba(255,255,255,0.2)",
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.6)",
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -16,
                    right: { xs: 200, md: 250 },
                    height: { xs: 48, md: 64 },
                    width: { xs: 48, md: 64 },
                    borderRadius: "50%",
                    backgroundColor: "#23d067",
                    filter: "blur(20px)",
                    opacity: hovered ? 0.9 : 0.5,
                    transition: "all 0.4s ease",
                    zIndex: 11111,
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: -16,
                    right: -16,
                    height: { xs: 32, md: 100 },
                    width: { xs: 32, md: 100 },
                    borderRadius: "50%",
                    backgroundColor: "#128c7e",
                    filter: "blur(20px)",
                    opacity: hovered ? 0.9 : 0.5,
                    transition: "all 0.4s ease",
                    zIndex: 1111,
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </AnimatedComponent>
    </Box>
  );
}
