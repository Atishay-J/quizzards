import "./homepage.css";
import Parallax from "../parallax/Parallax";
import Doors from "../parallax/Doors";

export default function Homepage() {
  return (
    <div className="homepageContainer">
      <Parallax />
      <Doors />
    </div>
  );
}
