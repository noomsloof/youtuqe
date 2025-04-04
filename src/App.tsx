import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import './App.css';
import './style.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าหลัก */}
        <Route path="/" element={<Home />} />
        {/* หน้าดูวิดีโอ */}
        <Route path="/watch/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
