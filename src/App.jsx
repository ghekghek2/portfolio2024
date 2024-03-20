import Pagelayout from "./ui/Pagelayout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Live from "./ui/Live";
import Design from "./ui/Design";
import Mockup from "./ui/Mockup";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./ui/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
