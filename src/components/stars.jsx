import { BsStarFill } from "react-icons/bs";

function Stars(rating) {
  const starIcons = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    starIcons.push(<BsStarFill />);
  }

  while (starIcons.length < 5) {
    starIcons.push(<BsStarFill className="not-filled" />);
  }

  return starIcons;
}

export default Stars;
