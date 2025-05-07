import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Tooltip,
  IconButton,
  Container,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CustomButton from "../components/CustomButton";

export default function Integration() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const codeSamples = [
    {
      language: "PHP",
      code: `<?php
use GuzzleHttp\\Client;

$apiKey = 'your_api_key_here';

$response = (new Client())->post('https://wasenderapi.com/api/send-message', [
    'headers' => [
        'Authorization' => 'Bearer ' . $apiKey
    ],
    'json' => [
        'to' => '1234567890',
        'text' => 'Hello from WasenderApi!'
    ]
]);`,
    },
    {
      language: "Python",
      code: `import httpx

api_key = 'your_api_key_here'

response = httpx.post(
    'https://wasenderapi.com/api/send-message',
    json={
        'to': '1234567890',
        'location': {
            'latitude': 37.7749,
            'longitude': -122.4194
        }
    },
    headers={
        'Authorization': f'Bearer {api_key}'
    }
)`,
    },
    {
      language: "JavaScript",
      code: `import axios from 'axios';

const apiKey = 'your_api_key_here';

const response = await axios.post(
    'https://wasenderapi.com/api/send-message',
    {
        to: '1234567890',
        text: 'Hello from WasenderApi!',
        imageUrl: 'https://example.com/images/image.png'
    },
    {
        headers: {
            Authorization: \`Bearer \${apiKey}\`
        }
    }
);`,
    },
    {
      language: "Java",
      code: `import kong.unirest.Unirest;
import org.json.JSONObject;

String apiKey = "your_api_key_here";

var response = Unirest.post("https://wasenderapi.com/api/send-message")
    .header("Authorization", "Bearer " + apiKey)
    .body(new JSONObject()
        .put("to", "1234567890")
        .put("videoUrl", "https://example.com/videos/video.mp4"))
    .asJson();`,
    },
    {
      language: "C#",
      code: `using RestSharp;

var apiKey = "your_api_key_here";

var client = new RestClient("https://wasenderapi.com/api/send-message");
var request = new RestRequest()
    .AddHeader("Authorization", $"Bearer {apiKey}")
    .AddJsonBody(new {
        phone = "1234567890",
        documentUrl = "https://example.com/sample.pdf"
    });

var response = await client.ExecuteAsync(request);`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSamples[selectedTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "14px",
            textTransform: "uppercase",
            color: "#888",
            letterSpacing: 1,
            mb: 1,
          }}
        >
          Simple Integration · Powerful API
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "32px", md: "48px" },
          }}
        >
          WhatsApp Integration Made
          <Typography
            component="span"
            sx={{
              display: "block",
              color: "#24D366",
              fontSize: { xs: "32px", md: "48px" },
            }}
          >
            Effortless
          </Typography>
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#c5c5c5",
            fontSize: { xs: "16px", md: "18px" },
            maxWidth: "700px",
            mx: "auto",
            fontWeight: 300,
          }}
        >
          Send messages with just 3 lines of code. Choose your language and
          start integrating today.
        </Typography>

        {/* Code Box */}
        <Box sx={{ width: "100%", mt: 5 }}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#1e293b",
              borderRadius: 2,
              textAlign: "left",
              mx: "auto",
              p: 2,
              border: "3px solid #0C1E13",
              maxWidth: "100%",
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={(e, newValue) => setSelectedTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{ style: { background: "#10b981" } }}
              sx={{
                borderBottom: "1px solid #334155",
                "& .MuiTab-root": { color: "#94a3b8", textTransform: "none" },
                "& .Mui-selected": { color: "white !important" },
              }}
            >
              {codeSamples.map((sample, index) => (
                <Tab
                  key={index}
                  label={sample.language}
                  sx={{
                    fontWeight: "medium",
                    minWidth: 100,
                  }}
                />
              ))}
            </Tabs>

            <Box
              sx={{
                position: "relative",
                overflowX: "auto",
                bgcolor: "#1e1e1e",
                borderRadius: 2,
                mt: 2,
                border: "1px solid #334155",
              }}
            >
              <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                <IconButton
                  onClick={handleCopy}
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    color: "#94a3b8",
                    "&:hover": { color: "white" },
                    zIndex: 2,
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>

              <SyntaxHighlighter
                language={codeSamples[selectedTab].language.toLowerCase()}
                style={atomOneDark}
                customStyle={{
                  margin: 0,
                  padding: "24px",
                  background: "transparent",
                  fontSize: "0.9rem",
                  textAlign: "left",
                }}
              >
                {codeSamples[selectedTab].code}
              </SyntaxHighlighter>
            </Box>
          </Paper>
        </Box>

        <Box mt={4}>
          <CustomButton
            label={"Get Started"}
            color="white"
            backgroundGradient={"linear-gradient(to right, #23D067, #118E7C)"}
            background={undefined}
          />
        </Box>
      </Container>
    </Box>
  );
}
