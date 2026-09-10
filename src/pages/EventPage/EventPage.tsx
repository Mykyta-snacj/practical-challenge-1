import { useNavigate, useParams } from "react-router";
import type { Data } from "../../types/type";
import styles from "./EventPage.module.scss";
import classNames from "classnames";
import { Navigation } from "../../components/Navigation/Navigation";

type Props = {
  events: Data[];
};

export const EventPage: React.FC<Props> = ({ events }) => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();

  const event = events.find((el) => el.id === Number(eventId)) ?? null;

  if (event === null) {
    navigate("/events");
  }

  return (
    <div className={styles.eventPage}>
      <Navigation className={styles.nav} />

      <div className={styles.event}>
        <h1 className={styles.title}>{event?.title}</h1>

        {event?.about && <p>{`About: ${event.about}`}</p>}

        <p>{`Start: ${event?.startDate}`}</p>

        <p>{`Finish: ${event?.finishDate}`}</p>

        <p>
          Type:{" "}
          <span
            className={classNames(styles.type, {
              [styles.typeOnline]: event?.type === "Online",
              [styles.typeOffline]: event?.type === "Offline",
              [styles.typeHybride]: event?.type === "Hybride",
            })}
          >
            {event?.type}
          </span>
        </p>
      </div>
    </div>
  );
};
