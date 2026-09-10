//hooks
import { useEffect, useState } from "react";

//components
import { Form } from "../../components/Form";
//services
import type { Data } from "../../types/type";
import { date } from "../../services/date";
import styles from "./HomePage.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";

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
      <Navigation className={styles.nav} />

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
