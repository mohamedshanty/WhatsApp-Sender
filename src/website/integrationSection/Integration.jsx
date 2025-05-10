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
import CustomButton from "../../components/CustomButton";
import TitleSection from "../../components/TitleSection";
import AnimatedComponent from "../../AnimatedComponent";

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

  const languageImage = [
    "../../image/cpp.png",
    "../../image/csharp.png",
    "../../image/go.png",
    "../../image/java.png",
    "../../image/javascript.png",
    "../../image/kotlin.png",
    "../../image/lua.png",
    "../../image/php.png",
    "../../image/python.png",
    "../../image/ruby.png",
    "../../image/swift.png",
    "../../image/typescript.png",
  ];

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to bottom, #101624 , #0A0A0A)",
        color: "white",
        textAlign: "center",
      }}
    >
      <AnimatedComponent yOffset={50} delay={0}>
        <Container maxWidth="lg">
          <TitleSection
            subheading={"Simple Integration · Powerful API"}
            heading={"WhatsApp Integration Made"}
            highlight={"Effortless"}
            description={
              "Send messages with just 3 lines of code. Choose your language andstart integrating today."
            }
            sxDescription={undefined}
          />

          {/* Code Box */}
          <Box sx={{ width: "100%", mt: 5, maxWidth: "900px", mx: "auto" }}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                    "& .MuiTab-root": {
                      color: "#94a3b8",
                      textTransform: "none",
                    },
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
              </Box>

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

          {/* Language Image */}
          <Box
            sx={{
              mt: 5,
              display: "flex",
              gap: 5,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {languageImage.map((item, index) => (
              <Box
                key={index}
                component={"img"}
                src={item}
                alt="Language"
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.3)",
                    cursor: "pointer",
                  },
                }}
              />
            ))}
          </Box>

          <Box mt={4}>
            <CustomButton
              label={"Get Started"}
              link={"/signup"}
              sx={{
                background: "linear-gradient(to right, #23D067, #118E7C)",
                color: "white",
                "&:hover": {
                  boxShadow: "0px 2px 5px oklch(.76 .2015 149.74)",
                },
              }}
            />
          </Box>
        </Container>
      </AnimatedComponent>
    </Box>
  );
}
