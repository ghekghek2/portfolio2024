import Pagelayout from "./ui/Pagelayout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Live from "./ui/Live";
import Design from "./ui/Design";
import Mockup from "./ui/Mockup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pagelayout />}>
          <Route index element={<Navigate replace to="kevinDivinagracia" />} />
          <Route path="kevinDivinagracia" element={<AppLayout />} />
          <Route path="email" element={<Contact />} />

          <Route path="project" element={<Project />}>
            <Route index element={<Navigate replace to="live" />} />
            <Route path="live" element={<Live />} />
            <Route path="design" element={<Design />} />
            <Route path="mockup" element={<Mockup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
