import Posters from "../Components/Posters/Posters";
import PopularCarsList from "../Components/PopularCarsList/PopularCarsList";

export default function Home() {
  return (
    <main>
      <div className="container">
        <Posters />
        <PopularCarsList />
      </div>
    </main>
  );
}
