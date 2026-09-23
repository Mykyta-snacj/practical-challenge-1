//styles
import classNames from "classnames";
import styles from "./Form.module.scss";

//services
import { validateEvent } from "../../services/helpers/error";
import { date } from "../../services/date";
import type { FormData, Data } from "../../types/type";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../features/events-slice";
import type { AppDispatch, RootState } from "../../store";
import { clearEvent, onChange } from "../../features/event-slice";

type Props = {
  setEventId: React.Dispatch<React.SetStateAction<number | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  className: string;
};

export const Form: React.FC<Props> = ({ setEventId, setError, className }) => {
  const data = useSelector((state: RootState) => state.event.event);
  const dispatch = useDispatch<AppDispatch>();

  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    section: keyof FormData,
  ) => {
    dispatch(
      onChange({
        section,
        value: event.target.value,
      }),
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setEventId(null);

    const error = validateEvent(data, date);

    if (error) {
      setError(error);
      return;
    }

    try {
      const newEvent: Data = {
        ...data,
        id: Date.now(),
      };

      dispatch(addEvent(newEvent));
      setEventId(newEvent.id);
    } finally {
      dispatch(clearEvent());
    }
  };

  return (
    <form
      className={classNames(className, styles.form)}
      onSubmit={handleSubmit}
    >
      <section>
        <label htmlFor="title">Title: </label>

        <input
          value={data.title}
          id="title"
          name="title"
          required
          onChange={(event) => handleFormChange(event, "title")}
        />
      </section>

      <section>
        <label htmlFor="about">About: </label>

        <textarea
          value={data.about}
          id="about"
          name="about"
          onChange={(event) => handleFormChange(event, "about")}
        ></textarea>
      </section>

      <section>
        <label htmlFor="startDate">Start Date: </label>

        <input
          type="date"
          id="startDate"
          name="startDate"
          required
          value={data.startDate}
          onChange={(event) => handleFormChange(event, "startDate")}
        />
      </section>

      <section>
        <label htmlFor="finishDate">Finish Date: </label>

        <input
          type="date"
          id="finishDate"
          name="finishDate"
          required
          value={data.finishDate}
          onChange={(event) => handleFormChange(event, "finishDate")}
        />
      </section>

      <section>
        <label htmlFor="type">Type: </label>
        <select
          id="type"
          name="type"
          value={data.type}
          required
          onChange={(event) => handleFormChange(event, "type")}
        >
          <option value="" disabled>
            --Please choose an option--
          </option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
          <option value="Hybride">Hybride</option>
        </select>
      </section>

      {(data.type === "Offline" || data.type === "Hybride") && (
        <>
          <section>
            <label htmlFor="city">City: </label>
            <input
              value={data.city}
              id="city"
              name="city"
              onChange={(event) => handleFormChange(event, "city")}
            ></input>
          </section>

          <section>
            <label htmlFor="address">Address: </label>
            <input
              value={data.address}
              id="address"
              name="address"
              onChange={(event) => handleFormChange(event, "address")}
            ></input>
          </section>

          <section>
            <label htmlFor="postCode">Post Code: </label>
            <input
              value={data.postCode}
              id="postCode"
              name="postCode"
              onChange={(event) => handleFormChange(event, "postCode")}
            ></input>
          </section>
        </>
      )}

      <button className={styles.button}>Submit</button>
    </form>
  );
};
