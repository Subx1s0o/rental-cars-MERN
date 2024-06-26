import css from "./poster.module.css";

export default function Poster({ type, text, description, imageSrc }) {
  const styles = {
    lines: css.lines_class,
    arrows: css.arrow_class,
  };

  const backgrounds = {
    lines: css.lines_background,
    arrows: css.arrows_background,
  };

  const currentType = styles[type] || "default-class";

  const currentBackground = backgrounds[type] || "";

  return (
    <div className={`${css.main} ${currentBackground}`}>
      <div className={css.textContent}>
        <h1>{text}</h1>
        <p>{description}</p>
        <button className={currentType}>Rental Car</button>
      </div>
      <img src={`${imageSrc}`} alt="car" />
    </div>
  );
}
