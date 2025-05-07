import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsightsIcon from "@mui/icons-material/Insights";
import CustomButton from "../components/CustomButton";

const useCases = [
  {
    icon: (
      <ChatIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "Customer Support",
    description:
      "Provide instant customer service through WhatsApp. Answer queries, resolve issues, and collect feedback directly where your customers already are.",
  },
  {
    icon: (
      <NotificationsIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "Business Notifications",
    description:
      "Send real-time notifications, reminders, and updates to your customers via WhatsApp—perfect for appointments, order tracking, and time-sensitive events.",
  },
  {
    icon: (
      <SmartToyIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "AI-Powered Customer Support",
    description:
      "Automate customer support with smart workflows. Handle inquiries, FAQs, and process returns via WhatsApp, enhancing service efficiency.",
  },
  {
    icon: (
      <GroupAddIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "Lead Generation",
    description:
      "Capture and qualify leads through WhatsApp conversations. Automate follow-ups and nurture prospects with personalized messaging.",
  },
  {
    icon: (
      <ShoppingCartIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "E-commerce",
    description:
      "Send order confirmations, shipping updates, and delivery notifications. Enable customers to track orders or make purchases through WhatsApp.",
  },
  {
    icon: (
      <InsightsIcon
        sx={{
          fontSize: 30,
          color: "#ccc",
          p: 1,
          borderRadius: "50%",
          background: "linear-gradient(to right, #23D067, #118E7C)",
        }}
      />
    ),
    title: "Analytics & Reporting",
    description:
      "Sync WhatsApp conversations with your existing tools—CRMs, support platforms, and more—keeping customer data consistent and up-to-date.",
  },
];

export default function UseCases() {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to bottom, #0A0A0A, #101624)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
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
          Suggested Use Cases to
          <Typography
            variant="h4"
            component={"h2"}
            gutterBottom
            sx={{ color: "#24D366", fontSize: { xs: "32px", md: "48px" } }}
          >
            Inspire Your Integration
          </Typography>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 6, color: "#ccc" }}
        >
          Discover how businesses across industries are leveraging our WhatsApp
          API to transform their communication and drive results.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            rowGap: 3,
            columnGap: 3,
            mt: 4,
          }}
        >
          {useCases.map((item, index) => (
            <Box
              key={index}
              sx={{
                px: 3,
                py: 5,
                backgroundColor: "#1a1f2e",
                borderRadius: 3,
                height: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <Box>{item.icon}</Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="#ccc">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box mt={6} textAlign="center">
          <CustomButton
            label={"Start Building Today"}
            background={undefined}
            color={"white"}
            backgroundGradient={"linear-gradient(to right, #23D067, #118E7C)"}
          />
        </Box>
      </Container>
    </Box>
  );
}
