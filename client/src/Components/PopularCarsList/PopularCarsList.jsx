import { Link } from "react-router-dom";
import css from "./popularCarsList.module.css";
import CarItem from "../CarItem/CarItem";

export default function PopularCarsList() {
  const items = [
    {
      id: "1",
      title: "Nissan GT-R",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "80L",
      price: 40,
      discountedPrice: 0,
    },
    {
      id: "2",
      title: "Rolls - Royce",
      category: "Sedan",
      transmission: "Manual",
      places: 4,
      fuel: "70L",
      price: 70,
      discountedPrice: 0,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "3",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
  ];

  return (
    <>
      <div className={css.header}>
        <p className={css.category}>Popular Car</p>
        <Link className={css.link} to="/cars">
          View All
        </Link>
      </div>

      <ul className={css.ul}>
        {items.map((item) => {
          return <CarItem data={item} key={item.id} />;
        })}
      </ul>
    </>
  );
}
