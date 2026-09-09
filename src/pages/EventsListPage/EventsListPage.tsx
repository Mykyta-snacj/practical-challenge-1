//react-router
import { NavLink } from "react-router";

//services
import type { Data } from "../../types/type";
import styles from "./EventsList.module.scss";

type Props = {
  events: Data[];
};

export const EventsListPage: React.FC<Props> = ({ events }) => {
  return (
    <div className={styles.eventsPage}>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.navButton} end>
          Form
        </NavLink>
      </div>

      <div className={styles.list}>
        {events.map((event) => (
          <div key={event.id} className={styles.listItem}>
            <h3 className={styles.eventTitle}>{event.title}</h3>

            <p>Start: {event.startDate}</p>

            <p>Finish: {event.finishDate}</p>

            {event.type}
          </div>
        ))}
      </div>
    </div>
  );
};
