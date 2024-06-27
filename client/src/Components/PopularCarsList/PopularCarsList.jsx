import { Link } from "react-router-dom";
import css from "./popularCarsList.module.css";
import CarItem from "../CarItem/CarItem";
import { useState } from "react";
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
      id: "u6tuyu5",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 20,
    },
    {
      id: "u56yut6u",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 50,
    },
    {
      id: "86567566u",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 40,
    },
    {
      id: "568568",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 30,
    },
    {
      id: "86685",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 50,
    },
    {
      id: "6",
      title: "Koenigsegg",
      category: "Sport",
      transmission: "Manual",
      places: 2,
      fuel: "90L",
      price: 80,
      discountedPrice: 60,
      image: "../materials/car1.png",
    },
  ];

  const user = {
    id: "user123",
    favoriteItems: ["1", "3", "5"], // список айді улюблених товарів
  };

  const [favorites, setFavorites] = useState(user.favoriteItems);
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter((id) => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

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
          return (
            <CarItem
              data={item}
              key={item.id}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={toggleFavorite}
            />
          );
        })}
      </ul>
    </>
  );
}
