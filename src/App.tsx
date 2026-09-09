//hooks
import { useEffect, useState } from "react";

//router
import { Navigate, Route, Routes } from "react-router";

//services
import "./reset.css";
import type { Data } from "./types/type";

//components
import { HomePage } from "./pages/HomePage/HomePage";
import { EventsListPage } from "./pages/EventsListPage/EventsListPage";

function App() {
  const [eventsList, setEventsList] = useState<Data[]>(() => {
    const savedEvents = localStorage.getItem("events");

    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(eventsList));
  }, [eventsList]);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/form" replace />} />
      <Route
        path="/form"
        element={<HomePage events={eventsList} setEvents={setEventsList} />}
      />
      <Route path="/events" element={<EventsListPage events={eventsList} />} />
    </Routes>
  );
}

export default App;
