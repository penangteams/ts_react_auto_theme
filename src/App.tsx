/** @format */

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";
import Layout from "./components/Layout";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* public routes */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="about" element={<About />} />

              <Route path="contact" element={<Contact />} />
              <Route path="unauthorized" element={<Unauthorized />} />
              <Route path="/" element={<Home />} />

              {/* we want to protect these routes */}
              <Route element={<RequireAuth />}>
                <Route path="blog" element={<Blog />} />
                <Route path="admin" element={<Admin />} />
              </Route>

              {/* catch all */}
              <Route path="*" element={<Missing />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
