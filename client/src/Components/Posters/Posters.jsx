import css from "./posters.module.css";
import Poster from "./Poster/Poster";

export default function Posters() {
  return (
    <div className={css.main}>
      <Poster
        type="lines"
        text="The Best Platform for Car Rental"
        description="Ease of doing a car rental safely and reliably. Of course at a low price."
        imageSrc="../../materials/car1.png"
      />
      <Poster
        type="arrows"
        text="Easy way to rent a car at a low price"
        description="Providing cheap car rental services and safe and comfortable facilities."
        imageSrc="../../materials/car2.png"
      />
    </div>
  );
}
