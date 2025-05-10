import { Box, Divider, Paper, Typography } from "@mui/material";

export const gettingStartedData = [
  {
    title: "Getting Started",
    desc: "Kick off your integration with WasenderAPI in minutes. This section guides you through the essentials — from generating your API token to establishing your first WhatsApp session and sending your first message.",
    box: [
      {
        title: "Getting Started with WasenderAPI",
        method: "",
        path: "",
        des: "Learn how to quickly set up your WasenderAPI account and start sending WhatsApp messages in minutes. This guide covers account creation, token generation, sending your first message, and tracking delivery using our developer-friendly REST API.",
      },
    ],
  },
];

export default function GettingStarted() {
  return (
    <Box>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          API Documentation
        </Typography>
      </Box>
      <Box>
        {gettingStartedData.map((item, index) => {
          return (
            <Box key={index} sx={{ mt: 5 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {item.title}
              </Typography>
              <Divider sx={{ backgroundColor: "#333", my: 1 }} />
              <Typography
                variant="body1"
                gutterBottom
                sx={{ my: 2, color: "#B6B6B6", fontSize: 16 }}
              >
                {item.desc}
              </Typography>

              {item.box.map((itemBox, index) => (
                <Paper
                  key={index}
                  sx={{
                    backgroundColor: "#161616",
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid #333",
                    transition: "0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#1f1f1f",
                    },
                    "&:hover .box-title": {
                      color: "#24D366",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    className="box-title"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      mb: 1,
                      transition: "0.3s",
                    }}
                  >
                    {itemBox.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#ccc", fontSize: 14 }}
                  >
                    {itemBox.des}
                  </Typography>
                </Paper>
              ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
