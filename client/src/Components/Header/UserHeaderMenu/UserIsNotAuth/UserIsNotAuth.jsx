import css from "./userIsNotAuth.module.css";

export default function UserIsNotAuth() {
  return (
    <div className={css.main}>
      <button className={css.btn}>
        <svg className={css.svg} width="24" height="24">
          <use href="../../../assets/symbol-defs.svg#icon-setting"></use>
        </svg>
      </button>
      <button className={css.login}>Login</button>
    </div>
  );
}
