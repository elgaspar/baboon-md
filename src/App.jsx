import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/LandingPage";
import EditorPage from "@pages/EditorPage";
import NotFoundPage from "@pages/NotFoundPage.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

