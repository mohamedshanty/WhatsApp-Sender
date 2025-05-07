import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomButton from "../components/CustomButton";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Basic",
    description:
      "Start your WhatsApp business journey with our Basic plan - perfect for individuals.",
    price: "6",
    subDescription: "6 per session",
    features: [
      "1 WhatsApp number",
      "Unlimited messages",
      "Send Text Messages",
      "Send Images",
      "Send Videos",
      "Send Audios",
      "Send Documents",
      "Send Contacts",
      "Send Locations",
      "API access",
      "Webhook access",
    ],
  },

  {
    title: "Pro",
    description:
      "Scale your communication with our Pro plan - designed for growing businesses.",
    price: "15",
    subDescription: "5 per session",
    highlighted: true,
    features: [
      "3 WhatsApp numbers",
      "Unlimited messages",
      "Send Text Messages",
      "Send Images",
      "Send Videos",
      "Send Audios",
      "Send Documents",
      "Send Contacts",
      "Send Locations",
      "API access",
      "Webhook access",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Maximize your business potential with our Enterprise plan - ideal for medium to large teams.",
    price: "45",
    subDescription: "4.5 per session",
    features: [
      "10 WhatsApp numbers",
      "Unlimited messages",
      "Send Text Messages",
      "Send Images",
      "Send Videos",
      "Send Audios",
      "Send Documents",
      "Send Contacts",
      "Send Locations",
      "API access",
      "Webhook access",
    ],
  },
];

export default function Pricing() {
  return (
    <Box
      py={10}
      sx={{
        background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component={"h1"}
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "32px", md: "48px" },
          }}
        >
          Simple, Transparent Pricing
          <Typography
            variant="h4"
            component={"h2"}
            gutterBottom
            sx={{ color: "#24D366", fontSize: { xs: "32px", md: "48px" } }}
          >
            For Every Business Size
          </Typography>
        </Typography>
        <Typography sx={{ color: "#ccc", mb: 6 }}>
          Choose the perfect plan for your WhatsApp business needs with no
          hidden fees or per-message costs.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            mt: 4,
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                px: 3,
                py: 5,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={plan.highlighted ? 10 : 4}
                sx={{
                  background: "linear-gradient(to bottom, #0A0A0A , #101624)",
                  backgroundColor: plan.highlighted ? "#141f2e" : "",
                  p: 4,
                  borderRadius: 4,
                  border: plan.highlighted
                    ? "2px solid #24D366"
                    : "1px solid #444",
                  color: "white",
                  position: "relative",
                }}
              >
                {plan.highlighted && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: -16,
                      right: 16,
                      backgroundColor: "#24D366",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "12px",
                      px: 2,
                      py: 0.5,
                      borderRadius: "6px",
                    }}
                  >
                    Most Popular
                  </Box>
                )}

                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {plan.title}
                </Typography>

                <Typography variant="body2" color="#ccc" mb={2}>
                  {plan.description}
                </Typography>

                <Typography variant="h4" fontWeight="bold">
                  {plan.price}
                  <Typography component="span" variant="body2">
                    /mo
                  </Typography>
                </Typography>

                <Typography variant="caption" color="#aaa">
                  {plan.subDescription}
                </Typography>

                <Stack spacing={1} alignItems="flex-start" my={3}>
                  {plan.features.map((feature, i) => (
                    <Box key={i} display="flex" alignItems="center" gap={1}>
                      <CheckCircleIcon
                        sx={{ color: "#24D366", fontSize: 18 }}
                      />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Stack>
                <CustomButton
                  label={"Get Started"}
                  background={plan.highlighted ? "white" : "transparent"}
                  color={plan.highlighted ? "black" : "white"}
                  backgroundGradient={undefined}
                />
              </Paper>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 5 }}>
          <CustomButton
            background={"white"}
            color={"black"}
            label="Start Your Free Trial"
            backgroundGradient={undefined}
          />

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#888",
              letterSpacing: 1,
              mb: 1,
              mt: 3,
            }}
          >
            Secure Payments By Paddle Learn More{" "}
            <Link to={"#"}>Account & Billing</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
