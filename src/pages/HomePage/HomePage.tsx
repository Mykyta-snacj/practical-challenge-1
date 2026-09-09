//hooks
import { useEffect, useState } from "react";

//react-router
import { NavLink } from "react-router";

//components
import { Form } from "../../components/Form";
//services
import type { Data } from "../../types/type";
import { date } from "../../services/date";
import styles from "./HomePage.module.scss";

type Props = {
  events: Data[];
  setEvents: React.Dispatch<React.SetStateAction<Data[]>>;
};

export const HomePage: React.FC<Props> = ({ setEvents }) => {
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
    <div className={styles.homePage}>
      <div className={styles.nav}>
        <NavLink to="/events" className={styles.navButton} end>
          EventsList
        </NavLink>
      </div>

      <h1 className={styles.title}>Event Mannager</h1>

      <Form
        data={data}
        setData={setData}
        setError={setError}
        setEvents={setEvents}
        className={styles.form}
      />

      <div className={styles.error}>{error ? error : ""}</div>
    </div>
  );
};
