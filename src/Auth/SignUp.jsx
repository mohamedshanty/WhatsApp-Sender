import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Alert,
  CircularProgress,
  Collapse,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import CustomTextField from "../components/CostomTextField";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      console.log("Form Submitted:", formData);
      navigate("/");
    }, 2000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        mt: "-80px",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            padding: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(15, 15, 15, 0.7)",
            borderRadius: 3,
            color: "white",
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Create New Account
          </Typography>

          <Collapse in={Object.keys(errors).length > 0}>
            <Alert severity="error" sx={{ mb: 2 }}>
              Please fix the errors below.
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <CustomTextField
                label="First Name"
                name="firstName"
                fullWidth
                margin="normal"
                value={formData.firstName}
                onChange={handleChange}
                // @ts-ignore
                error={!!errors.firstName}
                // @ts-ignore
                helperText={errors.firstName}
              />

              <CustomTextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                // @ts-ignore
                error={!!errors.lastName}
                // @ts-ignore
                helperText={errors.lastName}
                margin="normal"
              />
            </Box>

            <CustomTextField
              label="Email Address"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.email}
              variant="outlined"
              margin="normal"
            />

            <CustomTextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.password}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.password}
              // @ts-ignore
              helperText={errors.password}
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      sx={{ color: "#fff" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <CustomTextField
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.confirmPassword}
              // @ts-ignore
              helperText={errors.confirmPassword}
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      sx={{ color: "#fff" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#ddd",
                    "&.Mui-checked": {
                      color: "#ddd",
                    },
                  }}
                />
              }
              label="I agree to the Terms and Conditions"
              sx={{ mt: 1, mb: 2 }}
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              loadingIndicator={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={20} sx={{ color: "#ddd" }} />
                  <Typography sx={{ color: "#ddd", fontSize: 14 }}>
                    Signing Up...
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor: "#203a43",
                color: "#ddd",
                "&:hover": {
                  backgroundColor: "#2c5364",
                },
              }}
            >
              Sign Up
            </LoadingButton>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "#ccc" }}
            >
              Already have an account?{" "}
              <Link to="/signin" style={{ color: "#90caf9" }}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
