import Posters from "../Components/Posters/Posters";
import PopularCarsList from "../Components/PopularCarsList/PopularCarsList";

export default function Home() {
  return (
    <main>
      <section>
        <div className="container">
          <Posters />
        </div>
      </section>
      <section>
        <div className="container">
          <PopularCarsList />
        </div>
      </section>
    </main>
  );
}
