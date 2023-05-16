import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./collapse.scss";

function Collapse() {
  const [open, setOpen] = useState([false, false, false, false]);

  return (
    <ul className="collapse-container">
      <li
        className="collapse-container__toggle"
        onClick={() => setOpen([!open[0], false, false, false])}
      >
        <span>Fiabilité</span>
        {open[0] ? <FaChevronDown /> : <FaChevronUp />}
      </li>

      {open[0] && (
        <p className="collapse-container__toggle__p">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      )}
      <li
        className="collapse-container__toggle"
        onClick={() => setOpen([false, !open[1], false, false])}
      >
        <span>Respect</span>
        {open[1] ? <FaChevronDown /> : <FaChevronUp />}
      </li>
      {open[1] && (
        <p className="collapse-container__toggle__p">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      )}
      <li
        className="collapse-container__toggle"
        onClick={() => setOpen([false, false, !open[2], false])}
      >
        <span>Service</span>
        {open[2] ? <FaChevronDown /> : <FaChevronUp />}
      </li>
      {open[2] && (
        <p className="collapse-container__toggle__p">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez
          la moindre question.
        </p>
      )}
      <li
        className="collapse-container__toggle"
        onClick={() => setOpen([false, false, false, !open[3]])}
      >
        <span>Sécurité</span>
        {open[3] ? <FaChevronDown /> : <FaChevronUp />}
      </li>
      {open[3] && (
        <p className="collapse-container__toggle__p">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      )}
    </ul>
  );
}

export default Collapse;
