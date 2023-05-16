import "./error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="message">
      <h1 className="message__h1">404</h1>
      <p className="message__oups">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="message__ret">
        Retournez sur la page d&apos;accueil.
      </Link>
    </div>
  );
}

export default Error;
