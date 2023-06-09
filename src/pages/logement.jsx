import { useParams } from "react-router-dom";
import { useFetchHouse } from "../utils/api";
import "./logement.scss";
import Error from "./error";
import Collapse from "../components/collapse";
import Tag from "../components/tag";
import Equipment from "../components/equipments";
import Stars from "../components/stars";
import Slideshow from "../components/slideshow";

function Fiche() {
  let { ficheNumber } = useParams();
  const { data, isLoading, error } = useFetchHouse(ficheNumber);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error />;
  if (!data) return <Error />;

  const starIcons = Stars(data.rating);

  return (
    <>
      {/*<pre> {JSON.stringify(data, null, 2)}</pre>*/}
      <div className="house">
        <Slideshow photos={data.pictures} />
        <div className="house-flex">
          <div className="house__intro">
            <div className="house__intro_title">
              <h2>{data.title}</h2>
              <span>{data.location}</span>
            </div>
            <div className="tag-container">
              {data.tags.map((e, index) => (
                <Tag key={index} tag={e} />
              ))}
            </div>
          </div>
          <div className="house__ratag">
            <div className="house__intro_name">
              <span>{data.host.name}</span>
              <img src={data.host.picture} alt={data.host.name} />
            </div>
            <div className="rating-container">
              {starIcons.map((icon, index) => (
                <span className="rating-star" key={index}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="house__collapsible">
          <Collapse title="Description">{data.description}</Collapse>
          <Collapse title="Equipements">
            {data.equipments.map((e, index) => (
              <Equipment key={index} equipment={e} />
            ))}
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default Fiche;
