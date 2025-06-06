import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { HelpOutline, KeyboardArrowRight } from "@mui/icons-material";
import CustomButton from "../../components/CustomButton";
import TitleSection from "../../components/TitleSection";
import AnimatedComponent from "../../AnimatedComponent";

const faqData = [
  {
    question: "How do I create my first WhatsApp session?",
    answer: "You can start a new session by scanning your WhatsApp QR code.",
  },
  {
    question: "Will people know I'm using WasenderApi to send messages?",
    answer: "No, messages are sent from your personal WhatsApp number.",
  },
  {
    question: "Can I connect multiple WhatsApp accounts?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
  {
    question: "What happens if I log out of WhatsApp on my phone?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
  {
    question: "Is it safe to connect my WhatsApp account?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
  {
    question: "What should I do if my WhatsApp session disconnect?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
  {
    question: "Can I use webhooks to get real-time notifications?",
    answer: "Yes, depending on your plan, you can connect several numbers.",
  },
];

export default function FAQ() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0A0A0A, #101624)",
        py: 10,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <AnimatedComponent yOffset={50} delay={0}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <TitleSection
              subheading={"Support Documentation Help Center"}
              heading={"Frequently Asked"}
              highlight={"Questions"}
              description={
                "Find answers to the most common questions about our platform and services."
              }
              sxDescription={{ mb: 3 }}
            />
          </Box>

          <Box sx={{ backgroundColor: "#161616", borderRadius: "12px", p: 3 }}>
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: "#222222",
                  color: "#fff",
                  mb: 2,
                  borderRadius: 2,
                  px: 2,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#24D366" }} />}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <HelpOutline sx={{ color: "#24D366" }} />
                    <Typography fontWeight="bold">{item.question}</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="#ccc">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "14px",
                letterSpacing: 1,
                mb: 1,
                mt: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to={"#"} style={{ color: "#888", textDecoration: "none" }}>
                Vist Our Help Center Additional Resources
              </Link>
              <KeyboardArrowRight sx={{ color: "#888" }} />
            </Typography>
          </Box>

          <Stack
            direction={"row"}
            textAlign={"center"}
            justifyContent={"space-around"}
            sx={{ mt: 5 }}
            flexWrap={"wrap"}
          >
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "14px",
                  color: "#888",
                  letterSpacing: 1,
                  mb: 3,
                  mt: 3,
                }}
              >
                Need More Help? We're Here For you
              </Typography>
              <CustomButton
                sx={{ backgroundColor: "white", color: "black" }}
                label={"Contact Our Support Team"}
                link={"/ContactPage"}
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "14px",
                  color: "#888",
                  letterSpacing: 1,
                  mb: 3,
                  mt: 3,
                }}
              >
                Check Our Documentation
              </Typography>
              <CustomButton
                sx={{ backgroundColor: "#1414147d", color: "white" }}
                label={"View Documentation"}
                link={"/documentation"}
              />
            </Box>
          </Stack>
        </Container>
      </AnimatedComponent>
    </Box>
  );
}
