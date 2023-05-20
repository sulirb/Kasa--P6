import { useParams } from "react-router-dom";
import { useFetchHouse } from "../utils/api";
import Error from "./error";

function Fiche() {
  let { ficheNumber } = useParams();
  const { data, isLoading, error } = useFetchHouse(ficheNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  const firstImage = data.pictures[0];

  return (
    <>
      <pre> {JSON.stringify(data, null, 2)}</pre>
      <h1>Fiche logement {ficheNumber}</h1>
      <div className="house_container">
        <img src={firstImage} />

        <div>
          <div>
            <h2>{data.title}</h2>
            <p>{data.location}</p>
          </div>
          <p>{data.host.name}</p>
          <img src={data.host.picture} alt={data.host.name} />
        </div>
      </div>
    </>
  );
}

export default Fiche;
