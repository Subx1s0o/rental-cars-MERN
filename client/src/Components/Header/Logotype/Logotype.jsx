import css from "./logotype.module.css";
import { Link } from "react-router-dom";
export default function Logotype() {
  return (
    <Link to="/" className={css.logo}>
      MORENT
    </Link>
  );
}
