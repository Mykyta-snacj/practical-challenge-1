//react-router
import { Navigate, useNavigate, useParams } from "react-router";

//styles
import styles from "./EventPage.module.scss";
import classNames from "classnames";

//redux
import { useDispatch, useSelector } from "react-redux";
import { removeEvent } from "../../features/events-slice";
import type { AppDispatch, RootState } from "../../store";

//components
import { Navigation } from "../../components/Navigation/Navigation";

export const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const events = useSelector((state: RootState) => state.eventsList.events);
  const event = events.find((el) => el.id === Number(eventId));
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const handleDelete = () => {
    navigate("/events");
    dispatch(removeEvent(event.id));
  };

  return (
    <div className={styles.eventPage}>
      <Navigation className={styles.nav} />

      <div className={styles.event}>
        <div className={styles.line}>
          <h1 className={styles.title}>{event?.title}</h1>
          <button onClick={handleDelete} className={styles.buttonDelete}>
            Remove Event
          </button>
        </div>

        <div className={styles.line}>
          Start: <span>{event.startDate}</span>
        </div>
        <div className={styles.line}>
          Finish: <span>{event.finishDate}</span>
        </div>

        <div className={styles.line}>
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
        </div>

        {event.type !== "Online" && (
          <>
            {event.city && (
              <div className={styles.line}>
                City: <span>{event.city}</span>
              </div>
            )}
            {event.address && (
              <div className={styles.line}>
                Address: <span>{event.address}</span>
              </div>
            )}
            {event.postCode && (
              <div className={styles.line}>
                Post Code: <span>{event.postCode}</span>
              </div>
            )}
          </>
        )}

        {event?.about && (
          <div>
            About: <div className={styles.about}>{event.about}</div>
          </div>
        )}
      </div>
    </div>
  );
};
