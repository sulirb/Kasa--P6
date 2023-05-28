import LandscapeHome from "../assets/landcape-home.png";
import LandscapeAbout from "../assets/landcape-about.png";
import "./banner.scss";

export function HomeBanner() {
  return (
    <div className="banner">
      <img src={LandscapeHome} alt="landscape" className="banner__img" />
      <h2 className="banner__txt">Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export function AboutBanner() {
  return (
    <div className="about-banner">
      <img src={LandscapeAbout} alt="landscape" className="banner__img" />
    </div>
  );
}
