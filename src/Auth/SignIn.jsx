// @ts-ignore
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Alert,
  Collapse,
  CircularProgress,
  ThemeProvider,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import CustomTextField from "../components/CostomTextField";
import { LoadingButton } from "@mui/lab";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      console.log("User Logged In:", formData);
      setLoading(false);
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
            Sign In
          </Typography>

          {/* Animated Error Alert */}
          <Collapse in={Object.keys(errors).length > 0}>
            <Alert severity="error" sx={{ mb: 2 }}>
              Please fix the errors below.
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
            <CustomTextField
              label="Email Address"
              name="email"
              margin="normal"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.email}
              // @ts-ignore
              helperText={errors.email}
            />

            <CustomTextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              // @ts-ignore
              error={!!errors.password}
              // @ts-ignore
              helperText={errors.password}
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
              label="Remember me"
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
                    Signing In...
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
              Sign In
            </LoadingButton>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <Link to={"/signup"} style={{ color: "#90caf9" }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
