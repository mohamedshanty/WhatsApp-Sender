import { Route, Routes } from "react-router-dom";
import Home from "./website/main/Home";
import Documentation from "./documentation/Documentation";
import ApiReference from "./documentation/ApiReference";
import GettingStarted from "./documentation/GetStarted";
import { CssBaseline } from "@mui/material";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import ContactPage from "./ContactPage/ContactPage";

export default function App() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <CssBaseline />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />}>
          <Route index element={<GettingStarted />} />
          <Route path="getting-started" element={<GettingStarted />} />
        </Route>
      </Routes>
    </div>
  );
}
