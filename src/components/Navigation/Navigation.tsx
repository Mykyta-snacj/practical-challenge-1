import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

type Props = {
  className: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(className, styles.nav)}>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? styles.active : "")}
        end
      >
        Form
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? styles.active : "")}
        end
      >
        Events List
      </NavLink>
    </div>
  );
};
