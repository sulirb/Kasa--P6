import { useParams } from "react-router-dom";
import { useFetchHouse } from "../utils/api";

function Fiche() {
  let { ficheNumber } = useParams();
  const { data, isLoading, error } = useFetchHouse(ficheNumber);

  return (
    <>
      <pre> {JSON.stringify(data, null, 2)}</pre>
      <h1> Fiche logement {ficheNumber} </h1>;{" "}
    </>
  );
}

export default Fiche;
