//react-router
import { NavLink } from "react-router";

//styles
import styles from "./EventsList.module.scss";
import classNames from "classnames";

//redux
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

//components
import { Navigation } from "../../components/Navigation/Navigation";

export const EventsListPage = () => {
  const events = useSelector((state: RootState) => state.eventsList.events);

  return (
    <div className={styles.eventsPage}>
      <Navigation className={styles.nav} />

      <div className={styles.list}>
        {events.length < 1 ? (
          <h3 className={styles.empty}>The Events List is empty.</h3>
        ) : (
          events.map((event) => (
            <NavLink
              key={event.id}
              className={styles.listItem}
              to={`/events/${event.id}`}
            >
              <div className={styles.listItemContent}>
                {" "}
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
              </div>

              <div className={styles.dropdownContent}>
                <p>Title: {event.title}</p>
                {event.city !== "" && <p>City: {event.city}</p>}
                <p>About: {event.about}</p>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};
