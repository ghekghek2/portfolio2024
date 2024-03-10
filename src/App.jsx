import Pagelayout from "./ui/Pagelayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pagelayout />}>
          <Route index path="kevinDivinagracia" element={<AppLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
