//hooks
import { useEffect, useState } from "react";

//components
import { Form } from "../../components/Form";
import { Navigation } from "../../components/Navigation/Navigation";
import { SuccessNotification } from "../../components/SuccessNotification";

//services
import styles from "./HomePage.module.scss";
import classNames from "classnames";

export const HomePage = () => {
  const [error, setError] = useState<string | null>("");
  const [eventId, setEventId] = useState<number | null>(null);

  useEffect(() => {
    if (!error) {
      return;
    }

    const timer = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className={styles.homePage}>
      <Navigation className={styles.nav} />

      {eventId ? (
        <SuccessNotification eventId={eventId} setEventId={setEventId} />
      ) : (
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Event Mannager</h1>

          <Form
            setEventId={setEventId}
            setError={setError}
            className={styles.form}
          />

          <div
            className={classNames(styles.error, {
              [styles.errorActive]: error,
            })}
          >
            {error}
          </div>
        </div>
      )}
    </div>
  );
};
