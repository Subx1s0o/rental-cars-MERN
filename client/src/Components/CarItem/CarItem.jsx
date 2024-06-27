import css from "./carItem.module.css";

export default function CarItem({ data, isFavorite, toggleFavorite }) {
  const {
    id,
    title,
    category,
    transmission,
    places,
    fuel,
    price,
    image,
    discountedPrice,
  } = data;

  return (
    <li className={css.li}>
      <div className={css.headerDiv}>
        <div className={css.text}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.category}>{category}</p>
        </div>
        <button onClick={() => toggleFavorite(id)}>
          <span style={{ color: isFavorite ? "red" : "black" }}>❤</span>
        </button>
      </div>
      <img src={image} alt={title} />
      <ul className={css.ul}>
        <li>{fuel}</li>
        <li>{transmission}</li>
        <li>{places}</li>
      </ul>

      <div className={css.price_and_button}>
        <div className={css.prices}>
          <div className={css.pricesDiv}>
            {discountedPrice !== 0 ? (
              <p className={css.price}>${discountedPrice}</p>
            ) : (
              <p className={css.price}>${price}</p>
            )}

            <p className={css.per}>/day</p>
          </div>
          <div className={css.discountedPrice}>
            {discountedPrice !== 0 && <p className={css.discStyle}>${price}</p>}
          </div>
        </div>

        <button className={css.button}>Rent Now</button>
      </div>
    </li>
  );
}
