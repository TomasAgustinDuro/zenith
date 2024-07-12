// eslint-disable-next-line react/prop-types
import { Button } from "./Button";

export function Navbar({ logo }) {
  return (
    <>
      <div className="logo">
        <strong>{logo}</strong>
      </div>

      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>Plane it works</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </nav>

      <Button texto={"Download"} />
    </>
  );
}
