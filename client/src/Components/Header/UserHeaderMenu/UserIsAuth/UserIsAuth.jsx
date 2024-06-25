import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import css from "./userIsAuth.module.css";
import { useState } from "react";

export default function UserIsAuth() {
  const [n, setN] = useState(true);
  return (
    <ul className={css.ul}>
      <li className={css.li}>
        <svg className={css.svg} width="24" height="24">
          <use href="../../../assets/symbol-defs.svg#icon-heart"></use>
        </svg>
      </li>
      <li className={css.li}>
        <svg className={css.svg} width="24" height="24">
          <use href="../../../assets/symbol-defs.svg#icon-notification"></use>
        </svg>

        {
          //notifications
          n && <span className={css.notification}></span>
        }
      </li>
      <li className={css.li}>
        <svg className={css.svg} width="24" height="24">
          <use href="../../../assets/symbol-defs.svg#icon-setting"></use>
        </svg>
      </li>
      <li>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 44, height: 44 }}>
          N
        </Avatar>
      </li>
    </ul>
  );
}
