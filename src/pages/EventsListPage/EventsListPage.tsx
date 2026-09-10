//react-router
import { NavLink } from "react-router";

//services
import type { Data } from "../../types/type";
import styles from "./EventsList.module.scss";
import { Navigation } from "../../components/Navigation/Navigation";
import classNames from "classnames";

type Props = {
  events: Data[];
};

export const EventsListPage: React.FC<Props> = ({ events }) => {
  return (
    <div className={styles.eventsPage}>
      <Navigation className={styles.nav} />

      <div className={styles.list}>
        {events.map((event) => (
          <NavLink
            key={event.id}
            className={styles.listItem}
            to={`/events/${event.id}`}
          >
            <h3 className={styles.eventTitle}>{event.title}</h3>

            <p>Start: {event.startDate}</p>

            <p>Finish: {event.finishDate}</p>

            <p
              className={classNames(styles.type, styles.lastColumn, {
                [styles.typeOnline]: event?.type === "Online",
                [styles.typeOffline]: event?.type === "Offline",
                [styles.typeHybride]: event?.type === "Hybride",
              })}
            >
              {event.type}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
