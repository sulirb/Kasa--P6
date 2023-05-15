import Card from "../components/card";
import { useFetch } from "../utils/api";
import "./home.scss";

function Home() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des données.</div>;
  }
  return (
    <section className="grid-container">
      {data.map((item) => (
        <Card key={item.id} title={item.title} picture={item.cover} />
      ))}
    </section>
  );
}

export default Home;
