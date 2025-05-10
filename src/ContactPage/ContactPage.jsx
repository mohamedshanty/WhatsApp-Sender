import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Alert,
  Collapse,
  CircularProgress,
  Paper,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Header from "../components/Header";
import Footer from "../website/Footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(to bottom, #0A0A0A, #101624)",
          py: 4,
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
              color: "white",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#aaa",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Have any questions or need help? Feel free to contact us
          </Typography>

          {/* Error Alert */}
          <Collapse in={Object.keys(errors).length > 0}>
            <Alert
              severity="error"
              sx={{
                mb: 2,
                maxWidth: "600px",
                mx: "auto",
                backgroundColor: "rgba(255, 0, 0, 0.1)",
              }}
            >
              Please fix the errors below.
            </Alert>
          </Collapse>

          {/* Success Alert */}
          <Collapse in={submitSuccess}>
            <Alert
              severity="success"
              sx={{
                mb: 2,
                maxWidth: "600px",
                mx: "auto",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
              }}
            >
              Your message has been sent successfully!
            </Alert>
          </Collapse>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "32px",
              width: "100%",
            }}
          >
            {/* Contact Form Box */}
            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold", mb: 3, color: "white" }}
                >
                  Send Us a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    label="Full Name"
                    name="name"
                    margin="normal"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{
                      mb: 2,
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": { color: "#aaa" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#444" },
                        "&:hover fieldset": { borderColor: "#666" },
                      },
                    }}
                  />

                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    margin="normal"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      mb: 2,
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": { color: "#aaa" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#444" },
                        "&:hover fieldset": { borderColor: "#666" },
                      },
                    }}
                  />

                  <TextField
                    label="Subject"
                    name="subject"
                    margin="normal"
                    fullWidth
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    sx={{
                      mb: 2,
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": { color: "#aaa" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#444" },
                        "&:hover fieldset": { borderColor: "#666" },
                      },
                    }}
                  />

                  <TextField
                    label="Message"
                    name="message"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    sx={{
                      mb: 3,
                      "& .MuiInputBase-root": { color: "white" },
                      "& .MuiInputLabel-root": { color: "#aaa" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#444" },
                        "&:hover fieldset": { borderColor: "#666" },
                      },
                    }}
                  />

                  <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    loading={loading}
                    loadingIndicator={
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CircularProgress size={20} sx={{ color: "white" }} />
                        <Typography sx={{ color: "white", fontSize: 14 }}>
                          Sending...
                        </Typography>
                      </Box>
                    }
                    sx={{
                      py: 1.5,
                      fontWeight: "bold",
                      backgroundColor: "#203a43",
                      "&:hover": {
                        backgroundColor: "#2c5364",
                      },
                    }}
                  >
                    Send Message
                  </LoadingButton>
                </Box>
              </Paper>
            </Box>

            {/* Contact Info Box - Updated to match reference image */}
            <Box sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "12px",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "white",
                    fontSize: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <EmailIcon
                      sx={{
                        mr: 2,
                        color: "#90caf9",
                        fontSize: "1.2rem",
                        mt: 0.3,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#aaa", mb: 0.5 }}
                      >
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        contact@wasenderapi.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
                  >
                    <PhoneIcon
                      sx={{
                        mr: 2,
                        color: "#90caf9",
                        fontSize: "1.2rem",
                        mt: 0.3,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#aaa", mb: 0.5 }}
                      >
                        Phone
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        +20 3807 8513
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationIcon
                      sx={{
                        mr: 2,
                        color: "#90caf9",
                        fontSize: "1.2rem",
                        mt: 0.3,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#aaa", mb: 0.5 }}
                      >
                        Address
                      </Typography>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        71-75 Shelton St, London WC2H 9JO, UK
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider
                  sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  Business Hours
                </Typography>

                <Table size="small" sx={{ mb: 3 }}>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#aaa",
                          padding: "4px 0",
                          width: "40%",
                        }}
                      >
                        Monday - Friday:
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "white",
                          padding: "4px 0",
                          fontWeight: "medium",
                        }}
                      >
                        9:00 AM - 6:00 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#aaa",
                          padding: "4px 0",
                        }}
                      >
                        Saturday:
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "white",
                          padding: "4px 0",
                          fontWeight: "medium",
                        }}
                      >
                        10:00 AM - 4:00 PM
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#aaa",
                          padding: "4px 0",
                        }}
                      >
                        Sunday:
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "white",
                          padding: "4px 0",
                          fontWeight: "medium",
                        }}
                      >
                        Closed
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Divider
                  sx={{ my: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                />

                {/* Social Media Box */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: "bold", color: "white" }}
                  >
                    Follow Us
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      href="https://facebook.com"
                      target="_blank"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <FacebookIcon sx={{ color: "#90caf9" }} />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com"
                      target="_blank"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <TwitterIcon sx={{ color: "#90caf9" }} />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com"
                      target="_blank"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <LinkedInIcon sx={{ color: "#90caf9" }} />
                    </IconButton>
                    <IconButton
                      href="https://instagram.com"
                      target="_blank"
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      }}
                    >
                      <InstagramIcon sx={{ color: "#90caf9" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
