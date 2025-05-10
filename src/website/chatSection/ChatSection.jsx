import React from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  Paper,
  Container,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Contacts,
  GroupAddOutlined,
  Image,
  KeyboardVoice,
  Room,
  Textsms,
  VerifiedUserOutlined,
  Videocam,
} from "@mui/icons-material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import TitleSection from "../../components/TitleSection";
import AnimatedComponent from "../../AnimatedComponent";

const ChatBubble = ({ type, content, sender }) => {
  const isUser = sender === "user";

  const renderContent = () => {
    switch (type) {
      case "text":
        return <Typography variant="body2">{content}</Typography>;
      case "image":
        return (
          <Box
            sx={{
              border: "3px solid #ccc",
              backgroundColor: "black",
              width: 200,
              height: 200,
            }}
          >
            <Box
              component={"img"}
              src="../../image/IMG_20220808_133344_892.jpg"
              sx={{ width: "100%" }}
            />
          </Box>
        );
      case "video":
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#E5DDD5",
              color: "#fff",
              p: 1,
              borderRadius: 1,
            }}
          >
            <PlayArrowIcon />
            <Typography variant="body2">Video Message</Typography>
          </Box>
        );
      case "voice":
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "#eee",
              p: 1,
              borderRadius: 1,
            }}
          >
            <VolumeUpIcon />
            <Typography variant="body2">Voice Message</Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: isUser ? "#DCF8C6" : "#fff",
        }}
      >
        {renderContent()}
      </Paper>
    </Box>
  );
};

const items = [
  { label: "Text", icon: <Textsms /> },
  { label: "Voice", icon: <KeyboardVoice /> },
  { label: "Image", icon: <Image /> },
  { label: "Contact", icon: <Contacts /> },
  { label: "Video", icon: <Videocam /> },
  { label: "Location", icon: <Room /> },
];

const senderTypes = [
  {
    icon: (
      <VerifiedUserOutlined
        sx={{
          backgroundColor: "#489BFF",
          p: 1,
          borderRadius: "50%",
        }}
      />
    ),
    label: "User",
  },
  {
    icon: (
      <GroupAddOutlined
        sx={{
          backgroundColor: "#00DB6D",
          p: 1,
          borderRadius: "50%",
        }}
      />
    ),
    label: "Groups",
  },
  {
    icon: (
      <GroupAddOutlined
        sx={{
          backgroundColor: "#BF76FF",
          p: 1,
          borderRadius: "50%",
        }}
      />
    ),
    label: "Channels",
  },
];

export default function ChatSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
        color: "#fff",
      }}
    >
      <AnimatedComponent yOffset={50} delay={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            py: 6,
            px: 4,
            background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
            color: "#fff",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "center" },
              gap: 6,
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-start" },
                justifyContent: "center",
                textAlign: { xs: "left", md: "left" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <TitleSection
                  subheading={"Powerfull Integration Seamless Communication"}
                  heading={
                    <>
                      Send and receive <br /> WhatsApp
                    </>
                  }
                  highlight={"messages with your App"}
                  description={
                    <>
                      Easily integrate WhatsApp messaging through our webhook
                      system. Receive messages and events in real-time - check
                      our{" "}
                      <Link
                        to={"#"}
                        style={{ color: "#24D366", textDecoration: "none" }}
                      >
                        documentation
                      </Link>{" "}
                      to see how simple the integration process is.
                    </>
                  }
                  sxDescription={undefined}
                />
              </Box>

              {/* Message Types Title */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  mb: 2,
                  mt: 4,
                }}
              >
                Message Types
              </Typography>

              {/* Message Types Container */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: { md: "flex-start" },
                  maxWidth: "900px",
                }}
              >
                {items.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "48%", md: "30%" },
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(to bottom right, #23d067, #118e7c)",
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "#fff", fontWeight: 500 }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Supported Sender Types */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  mt: 4,
                  mb: 2,
                }}
              >
                Supported Sender Types
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: "flex-start",
                  width: { xs: "100%", md: "75%" },
                }}
              >
                {senderTypes.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    {item.icon}
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right: Chat UI */}
            <Box
              sx={{
                width: 350,
                maxWidth: "100%",
                border: "1px solid #ccc",
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#f5f5f5",
                mt: { xs: 5, md: 0 },
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Avatar
                  alt="Support"
                  src="https://via.placeholder.com/40"
                  sx={{ mr: 2 }}
                />
                <Typography variant="subtitle1" fontWeight="bold" color="black">
                  Support
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 2,
                  maxHeight: "400px",
                  overflowY: "auto",
                  bgcolor: "#E5DDD5",
                }}
              >
                <ChatBubble
                  type="text"
                  content="Hello! How can I assist you today?"
                  sender="agent"
                />
                <ChatBubble
                  type="image"
                  content="https://via.placeholder.com/150"
                  sender="user"
                />
                <ChatBubble type="video" content="" sender="agent" />
                <ChatBubble type="voice" content="" sender="user" />
              </Box>
            </Box>
          </Container>
        </Box>
      </AnimatedComponent>
    </Box>
  );
}
