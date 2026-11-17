import { Link } from "react-router-dom";
import { TopBar } from "../components/Layout";

export function NotFound() {
  return (
    <>
      <TopBar />
      <main id="main" className="page page-narrow">
        <h1 className="page-title">Page not found</h1>
        <p>
          <Link to="/">Back to the lectures</Link>
        </p>
      </main>
    </>
  );
}
