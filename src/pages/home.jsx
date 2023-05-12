import Card from "../components/card";
import { useFetch } from "../utils/api";

function Home() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des données.</div>;
  }

  return (
    <div>
      <h1>Page d&apos;accueil</h1>
      <section>
        {data &&
          data.map((item) => (
            <Card key={item.id} title={item.title} picture={item.cover} />
          ))}
      </section>
    </div>
  );
}

export default Home;
