import { BsStarFill } from "react-icons/bs";

const stars = Array(5).fill(1);
function Stars(rating) {
  return stars.map((_, i) => (
    <BsStarFill className={+rating <= i ? "not-filled" : ""} key={i} />
  ));
}

export default Stars;
