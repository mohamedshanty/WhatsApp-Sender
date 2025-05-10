import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Drawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "Getting Started",
    path: "getting-started",
    subItems: [
      {
        title: "Getting Started with WasenderAPI",
        path: "getting-started-with-wasenderapi",
      },
    ],
  },
  {
    title: "Authentication",
    path: "authentication",
    subItems: [
      {
        title: "How to Authenticate API Requests Using Bearer Tokens",
        path: "bearer-tokens",
      },
    ],
  },
  {
    title: "Session",
    path: "session",
    subItems: [
      { title: "Get WhatsApp Session Status", path: "session-status" },
    ],
  },
  {
    title: "Message",
    path: "message",
    subItems: [
      { title: "Send Text Message", path: "send-text" },
      { title: "Send Image Message", path: "send-image" },
      { title: "Send Video Message", path: "send-video" },
      { title: "Send Document Message", path: "send-document" },
      { title: "Send Audio Message", path: "send-audio" },
      { title: "Send Sticker Message", path: "send-sticker" },
      { title: "Send Contact Card", path: "send-contact" },
      { title: "Send Location", path: "send-location" },
    ],
  },
  {
    title: "Groups",
    path: "groups",
    subItems: [
      { title: "Get All Grousp", path: "all-groups" },
      { title: "Send Group Message", path: "group-message" },
    ],
  },
  {
    title: "Channels (Communities)",
    path: "channels",
    subItems: [{ title: "Send Channel Message", path: "channel-message" }],
  },
  {
    title: "Webhooks",
    path: "webhooks",
    subItems: [
      { title: "Webhook Setup", path: "webhook-setup" },
      { title: "webhook: Message Send", path: "webhook-message-send" },
      { title: "Webhook: Session Status", path: "webhook-session-status" },
      { title: "Webhook: QR Code Updated", path: "webhook-qr-code" },
      { title: "Webhook: Message Received", path: "webhook-message-received" },
      {
        title: "Webhook: Message Status Update",
        path: "webhook-message-status",
      },
      { title: "Webhook: Message Deleted", path: "webhook-message-deleted" },
      {
        title: "Webhook: Message Receipt Update",
        path: "webhook-message-Receipt-Update",
      },
      { title: "Webhook: Message Reaction", path: "webhook-message-reaction" },
    ],
  },
  {
    title: "Responses & Errors",
    path: "responses-errors",
    subItems: [
      { title: "Response Headers", path: "response-headers" },
      { title: "Error Responses", path: "error-responses" },
    ],
  },
  {
    title: "Rate Limits",
    path: "rate-limits",
    subItems: [
      { title: "Understanding Rate Limits", path: "understanding-rate-limits" },
    ],
  },
];

export default function SideBar({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [openItems, setOpenItems] = useState({});

  const handleClick = (title) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        mt: 2,
        backgroundColor: "#0A0A0A",
        color: "#ffffff",
        position: "fixed",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#ccc",
          boxShadow: "0 0 10px white inset",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#3b3b3bc7",
          borderRadius: "20px",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ p: 2, borderBottom: "1px solid #333" }}>
        <Typography variant="h6">API Documentation</Typography>
        <Typography variant="body2" color="#ccc">
          WasenderApi WhatsApp API
        </Typography>
      </Box>

      {/* Scrollable list */}
      <Box sx={{ flexGrow: 1, py: 2 }}>
        <List>
          {sidebarItems.map((item) => (
            <Box key={item.title}>
              <Typography
                sx={{
                  pl: 3,
                  pt: 1,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  color: "#ccc",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              {item.subItems?.map((subItem) => (
                <ListItem key={subItem.title} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={`/documentation/${subItem.path}`}
                    selected={
                      location.pathname === `/documentation/${subItem.path}`
                    }
                    onClick={isMobile ? handleDrawerToggle : undefined}
                    sx={{
                      pl: 4,
                      py: 1,
                      borderRadius: "8px",
                      mx: 1,
                      mt: 0.5,
                      color: "#ccc",
                      "&.Mui-selected": {
                        backgroundColor: "#444452",
                        borderRadius: "12px",
                      },
                      "&:hover": {
                        backgroundColor: "#444452",
                      },
                    }}
                  >
                    <ListItemText
                      primary={subItem.title}
                      primaryTypographyProps={{ fontSize: "14px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: "1px solid #333", mb: 15 }}>
        <Typography variant="h6">Resources</Typography>
        <Typography variant="body2" color="#ccc">
          WasenderApi WhatsApp API
        </Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "#1e1e1e",
            color: "#fff",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        width: 280,
        minWidth: 280,
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "#1e1e1e",
      }}
    >
      {drawerContent}
    </Box>
  );
}
