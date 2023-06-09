import Card from "../components/card";
import { useFetchHouses } from "../utils/api";
import "./home.scss";
import { HomeBanner } from "../components/banner";
import Error from "./error";

function Home() {
  const { data, isLoading, error } = useFetchHouses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }
  return (
    <div>
      <HomeBanner />
      <section className="grid-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            picture={item.cover}
            href={`/logement/${item.id}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
