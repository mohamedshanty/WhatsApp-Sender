import {
  ArrowForward,
  CloseOutlined,
  CreditCardOutlined,
  StarsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import CustomButton from "../../components/CustomButton";

export default function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0A0A0A, #101624)",
        backgroundColor: "#0d0f12",
        color: "#fff",
        py: { xs: 6, md: 8 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        mt: "-10px",
      }}
    >
      {/* SVG Spotlight */}
      <Box
        component="svg"
        sx={{
          position: "absolute",
          top: { xs: "-200px", md: "0" },
          left: { xs: "-200px", md: "-750px" },
          width: "120%",
          height: "80%",
          zIndex: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="2000.71"
            cy="400.501"
            rx="2000.71"
            ry="350.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white"
            fillOpacity="0.50"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            />
          </filter>
        </defs>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "34px", sm: "48px", md: "64px", xl: "80px" },
          }}
        >
          Low-Cost WhatsApp API
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#24D366",
            mb: 2,
            fontSize: { xs: "24px", sm: "36px", md: "50px", xl: "70px" },
          }}
        >
          For Developers
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            maxWidth: 700,
            mx: "auto",
            fontWeight: "light",
            color: "#c5c5c5e6",
            fontSize: { xs: "16px", sm: "18px", md: "20px", xl: "25px" },
          }}
        >
          Unlimited Messages, multiple WhatsApp Sessions, Webhook Support And
          Developer-Friendly API With No Per-message fees
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          mb={3}
          alignItems={"center"}
        >
          <Rating value={5.0} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
            Rated 4.5/5.0 On Sourceforge
          </Typography>
        </Stack>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          mt={4}
          spacing={2}
          flexWrap="wrap"
        >
          <CustomButton
            label="Start Your Free Trial"
            sx={{ backgroundColor: "white", color: "black" }}
            link={"/signup"}
          />
          <CustomButton
            label="View API Docs"
            sx={{ backgroundColor: "transparent", color: "white" }}
            link={"/documentation"}
          />
        </Stack>

        {/* Features */}
        <Box
          sx={{
            mt: 6,
            mb: 10,
            mx: "auto",
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 4, md: 3 },
            borderRadius: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            width: { xs: "90%", md: "60%" },
            maxWidth: 800,
            background: "linear-gradient(to bottom, #0A0A0A, #101624)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ textAlign: "center" }}
          >
            <CreditCardOutlined sx={{ color: "#00ff99" }} />
            <Typography sx={{ fontWeight: 500, color: "white" }}>
              No Credit Card Required
            </Typography>
          </Stack>

          {/* Divider */}
          <Divider
            flexItem
            sx={{
              backgroundColor: "#cdcdcd94",
              display: { xs: "none", md: "block", width: 2, height: 30 },
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ textAlign: "center" }}
          >
            <StarsOutlined sx={{ color: "#00ccff" }} />
            <Typography sx={{ fontWeight: 500, color: "white" }}>
              2-Day Free Trial
            </Typography>
          </Stack>

          {/* Divider */}
          <Divider
            flexItem
            sx={{
              backgroundColor: "#cdcdcd94",
              display: { xs: "none", md: "block" },
              width: 2,
              height: 30,
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ textAlign: "center" }}
          >
            <CloseOutlined sx={{ color: "#ff4444" }} />
            <Typography sx={{ fontWeight: 500, color: "white" }}>
              Cancel Anytime
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
