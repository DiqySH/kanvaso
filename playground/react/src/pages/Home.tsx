import { Link } from "react-router";
import { pages } from "../router";

export default function Home() {
  return (
    <div className="flex flex-col">
      {pages.map((p) => {
        if (!p.path) return null;
        return <Link to={p.path}>{p.path}</Link>;
      })}
    </div>
  );
}
