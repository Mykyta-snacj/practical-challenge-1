//router
import { Link } from "react-router";

//styles
import styles from "./SuccessNotification.module.scss";

type Props = {
  eventId: number | null;
  setEventId: React.Dispatch<React.SetStateAction<number | null>>;
};

export const SuccessNotification: React.FC<Props> = ({
  eventId,
  setEventId,
}) => {
  const link = `${window.location.origin}/practical-challenge-1/#/events/${eventId}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
  };

  const baseUrl = `${window.location.origin}/practical-challenge-1/`;

  return (
    <div className={styles.notification}>
      <p className={styles.title}>Event added successfully!</p>

      <Link className={styles.link} to={`../events/${eventId}`}>
        Link: {`${baseUrl}#/events/${eventId}`}
      </Link>

      <div className={styles.activity}>
        <button className={styles.button} onClick={() => setEventId(null)}>
          Make new Event
        </button>

        <button className={styles.button} onClick={() => handleCopy()}>
          Copy Link
        </button>
      </div>
    </div>
  );
};
