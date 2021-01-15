import { Link } from "react-router-dom";

export const HomePage = function () {
  return (
    <div className="HomePage">
      <Link to="/add">Add Image(s)</Link>

      <br />

      <Link to="/search">Search Images</Link>
    </div>
  );
}

