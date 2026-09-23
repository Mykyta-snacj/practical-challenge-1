//hooks
import { useEffect } from "react";

//router
import { Navigate, Route, Routes } from "react-router";

//services
import "./reset.css";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

//components
import { HomePage } from "./pages/HomePage/HomePage";
import { EventsListPage } from "./pages/EventsListPage/EventsListPage";
import { EventPage } from "./pages/EventPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const events = useSelector((state: RootState) => state.eventsList.events);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/form" replace />} />
      <Route path="/*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/form" element={<HomePage />} />
      <Route path="/events" element={<EventsListPage />} />
      <Route path="/events/:eventId" element={<EventPage />} />
    </Routes>
  );
}

export default App;
