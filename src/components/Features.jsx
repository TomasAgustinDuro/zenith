import { TbRocket } from "react-icons/tb";

export function Features() {
  // eslint-disable-next-line react/prop-types
  const Feature = ({ title, content }) => {
    return (
      <div className="feature-content">
        <div className="feature-image">
          <TbRocket />
        </div>

        <h1>{title}</h1>

        <p>{content}</p>
      </div>
    );
  };

  return (
    <section className="features-section">
      <div className="f-titulo">
        <h2>Awesome Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          voluptatem exercitationem atque accusamus sapiente velit.
        </p>
      </div>

      <section className="features-cards">
        <Feature
          title={"Clean Design"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
        />

        <Feature
          imageUrl={`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
<path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
<path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`}
          title={"Clean Design"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
        />

        <Feature
          imageUrl={`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rocket" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
<path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
<path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>`}
          title={"Clean Design"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
        />
      </section>
    </section>
  );
}
