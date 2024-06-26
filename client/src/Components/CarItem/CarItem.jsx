import css from "./carItem.module.css";

export default function CarItem({ data }) {
  const {
    title,
    category,
    transmission,
    places,
    fuel,
    price,
    discountedPrice,
  } = data;

  return (
    <li className={css.li}>
      <h3 className={css.title}>{title}</h3>
      <p className={css.category}>{category}</p>
      <p>{fuel}</p>
      <p>{transmission}</p>
      <p>{places}</p>
      <p>${price}</p>
      <button>Rent Now</button>
      {discountedPrice !== 0 && <p>{discountedPrice}</p>}
    </li>
  );
}
