import { useState } from "react";
import "./collapse.scss";

function Collapse() {
  const [visible, setVisible] = useState([false, false, false, false]);

  return (
    <div className="collapse-container">
      <button
        className="collapse-container__toggle"
        onClick={() => setVisible([!visible[0], false, false, false])}
      >
        Fiabilité
      </button>

      {visible[0] && (
        <div>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      )}
      <button
        className="collapse-container__toggle"
        onClick={() => setVisible([false, !visible[1], false, false])}
      >
        Respect
      </button>
      {visible[1] && (
        <div>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>
      )}
      <button
        className="collapse-container__toggle"
        onClick={() => setVisible([false, false, !visible[2], false])}
      >
        Service
      </button>
      {visible[2] && (
        <div>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez
          la moindre question.
        </div>
      )}
      <button
        className="collapse-container__toggle"
        onClick={() => setVisible([false, false, false, !visible[3]])}
      >
        Sécurité
      </button>
      {visible[3] && (
        <div>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes.
        </div>
      )}
    </div>
  );
}

export default Collapse;
