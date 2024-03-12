import Pagelayout from "./ui/Pagelayout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pagelayout />}>
          <Route index element={<Navigate replace to="kevinDivinagracia" />} />
          <Route index path="kevinDivinagracia" element={<AppLayout />} />
          <Route path="email" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
