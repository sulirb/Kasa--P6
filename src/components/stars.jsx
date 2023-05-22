import { BsStarFill } from "react-icons/bs";

function Stars(rating) {
  const starIcons = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    starIcons.push(<BsStarFill key={`star-${i}`} />);
  }

  while (starIcons.length < 5) {
    starIcons.push(
      <BsStarFill
        key={`star-empty-${starIcons.length}`}
        className="not-filled"
      />
    );
  }

  return starIcons;
}

export default Stars;
