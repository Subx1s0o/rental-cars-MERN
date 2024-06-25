import css from "./searchInput.module.css";

export default function SearchInput() {
  return (
    <label className={css.label} htmlFor="search">
      <span>
        <svg className={css.icon} width="24" height="24">
          <use href="../../../assets/symbol-defs.svg#search-normal"></use>
        </svg>
      </span>
      <input
        className={css.input}
        type="text"
        name="search"
        id="search"
        placeholder="Search something here..."
      />
    </label>
  );
}
