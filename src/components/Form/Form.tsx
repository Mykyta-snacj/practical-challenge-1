//services
import classNames from "classnames";
import { date } from "../../services/date";
import { validateEvent } from "../../services/helpers/error";
import type { Data } from "../../types/type";
import styles from "./Form.module.scss";

type Props = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setEvents: React.Dispatch<React.SetStateAction<Data[]>>;
  className: string;
};

export const Form: React.FC<Props> = ({
  data,
  setData,
  setError,
  setEvents,
  className,
}) => {
  const handleFromChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    section: keyof Data,
  ) => {
    setData({
      ...data,
      [`${section}`]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const error = validateEvent(data, date);

    if (error) {
      setError(error);
      return;
    }

    const newEvent = {
      ...data,
      id: Date.now(),
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
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
          onChange={(event) => handleFromChange(event, "title")}
        />
      </section>

      <section>
        <label htmlFor="about">About: </label>

        <textarea
          value={data.about}
          id="about"
          name="about"
          onChange={(event) => handleFromChange(event, "about")}
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
          onChange={(event) => handleFromChange(event, "startDate")}
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
          onChange={(event) => handleFromChange(event, "finishDate")}
        />
      </section>

      <section>
        <label htmlFor="type">Type: </label>
        <select
          id="type"
          name="type"
          value={data.type}
          required
          onChange={(event) => handleFromChange(event, "type")}
        >
          <option value="" disabled>
            --Please choose an option--
          </option>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
          <option value="hybride">Hybride</option>
        </select>
      </section>

      <button className={styles.button}>Submit</button>
    </form>
  );
};
