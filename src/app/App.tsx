import { Routes, Route } from "react-router-dom";
import HomePage from "../features/adventure/pages/HomePage";
import AdventurePage from "../features/adventure/pages/AdventurePage";
import HistoryPage from "../features/version-history/pages/HistoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adventure/:adventureId" element={<AdventurePage />} />
      <Route
        path="/adventure/:adventureId/:nodeId"
        element={<AdventurePage />}
      />
      <Route path="/history" element={<HistoryPage />}></Route>
    </Routes>
  );
}
