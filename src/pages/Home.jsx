import Header from "../components/Header";
import React from "react";
import Hero from "./Hero";
import { Box } from "@mui/material";
import IntegrationSection from "./Integration";
import HowIt from "./HowIt";
import UseCases from "./UseCases";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import WhatsAppAPI from "./WhatsAppAPI";
import Footer from "./Footer";
import ChatSection from "./ChatSection";

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
