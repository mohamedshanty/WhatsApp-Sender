import Header from "../../components/Header";
import React from "react";
import Hero from "../Hero/Hero";
import { Box } from "@mui/material";
import IntegrationSection from "../integrationSection/Integration";
import HowIt from "../howIt/HowIt";
import UseCases from "../useCase/UseCases";
import Pricing from "../pricing/Pricing";
import FAQ from "../faq/FAQ";
import WhatsAppAPI from "../whatsAppAPI/WhatsAppAPI";
import Footer from "../Footer/Footer";
import ChatSection from "../chatSection/ChatSection";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Hero />
      <Box id="features">
        <IntegrationSection />
      </Box>
      <Box id="how-it-works">
        <HowIt />
      </Box>
      <ChatSection />
      <UseCases />
      <Box id="pricing">
        <Pricing />
      </Box>
      <Box id="faq">
        <FAQ />
      </Box>
      <WhatsAppAPI />
      <Footer />
    </Box>
  );
}
