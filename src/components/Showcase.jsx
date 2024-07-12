import image from "../assets/image.png";
import { Button } from "./Button";

export function Showcase() {

  return (
    <section className="showcase">
      <div className="sc-content">
        <h1>Showcase Your App With Applify</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="buttons">
          <Button texto={"Learn More"} />
          <Button texto={"Download"} />
        </div>
      </div>
      <img src={image} alt="imagen de zenith" />
    </section>
  );
}
