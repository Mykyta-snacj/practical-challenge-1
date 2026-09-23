//styles
import styles from "./NotFoundPage.module.scss";

//services
import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.message}>
        <h1 className={styles.title}>404</h1>

        <p>Something went wrong.</p>

        <Link className={styles.link} to="/">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};
