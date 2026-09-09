//hooks
import { useEffect, useState } from "react";

//components
import { Form } from "./components/Form";

//services
import type { Data } from "./types/type";
import { date } from "./services/date";
import { events } from "./api/events";
import styles from "./App.module.scss";
import "./reset.css";

function App() {
  const [eventsList, setEnentsList] = useState<Data[]>(events);
  const [error, setError] = useState<string | null>("");
  const [data, setData] = useState<Data>({
    id: null,
    title: "",
    about: "",
    startDate: date,
    finishDate: date,
    type: "",
  });

  useEffect(() => {
    if (!error) {
      return;
    }

    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Event Mannager</h1>

      <Form
        data={data}
        events={eventsList}
        setData={setData}
        setError={setError}
        setEvents={setEnentsList}
        className={styles.form}
      />

      <div className={styles.error}>{error ? error : ""}</div>

      <hr />

      <div>
        {eventsList.map((event) => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <h3>{event.id}</h3>
            {event.type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
