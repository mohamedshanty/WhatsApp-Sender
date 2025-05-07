import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../components/CustomButton";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import InsightsIcon from "@mui/icons-material/Insights";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const steps = [
  {
    number: 1,
    icon: <QrCodeScannerIcon sx={{ color: "#22c55e", width: 20 }} />,
    title: "Connect Your WhatsApp",
    description:
      "Scan a QR code to link your WhatsApp account securely with our platform in seconds.",
  },
  {
    number: 2,
    icon: <ChatBubbleOutlineIcon sx={{ color: "#22c55e", width: 20 }} />,
    title: "Create Your Message",
    description:
      "Craft your text message, add images, documents, or buttons using our easy to use api.",
  },
  {
    number: 3,
    icon: <InsightsIcon sx={{ color: "#22c55e", width: 20 }} />,
    title: "Send & Analyze",
    description:
      "Dispatch your messages and track delivery status in real-time.",
  },
];

export default function HowIt() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0A0A0A, #101624)",
        color: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component={"h1"}
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "32px", md: "48px" },
          }}
        >
          How WASenderAPI
          <Typography
            variant="h4"
            component={"h2"}
            gutterBottom
            sx={{ color: "#24D366", fontSize: { xs: "32px", md: "48px" } }}
          >
            Works for You
          </Typography>
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Get Started With WASenderApi Im Minutes With Our Simple, 3-Step
          Process
        </Typography>

        <Box
          sx={{
            // backgroundColor: "#0f0f0f",
            color: "#fff",
            py: 10,
            px: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 15,
            position: "relative",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={step.number}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Gradient Line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 38, md: 50 },
                    top: 48,
                    height: 450,
                    width: "2px",
                    background:
                      "linear-gradient(to bottom, #1A9C5B, #0d2e2f, #1A9C5B, #0d2e2f)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Number Circle with blur glass effect */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  minWidth: { xs: 70, md: 100 },
                  minHeight: { xs: 70, md: 100 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(74, 74, 74, 0.3)",
                  backdropFilter: "blur(5px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "#fff",
                  mr: 2,
                  border: "1px solid #414141",
                }}
              >
                {step.number}
              </Box>

              {/* Content */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    mb: 0.5,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(34, 197, 94, 0.15)",
                      backdropFilter: "blur(8px)",
                      px: 1.5,
                      py: 1,
                      borderRadius: "12px",
                      fontSize: "6px",
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontSize: 30 }}
                  >
                    {step.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", fontSize: "16px" }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <CustomButton
            background={"white"}
            color={"black"}
            label="Start Your Free Trial"
            backgroundGradient={undefined}
          />
        </Box>
      </Container>
    </Box>
  );
}
