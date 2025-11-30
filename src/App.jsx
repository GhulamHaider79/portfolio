import { Routes, Route } from "react-router-dom";

import Navbar from "./componants/Navbar";
import FooterSection from './componants/FooterSection'
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import ProtectedRoute from "./componants/ProtectedRoute";

function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Login page */}
        <Route path="/admin-login" element={<LoginPage />} />

        {/* Protected admin panel */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />

      </Routes>
      <FooterSection />
    </>
  )
}

export default App;
