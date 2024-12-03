import "./About.css";
import aboutContent from "./AboutContent";

const About = () => {
  const { description, image, alt } = aboutContent;

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={image} alt={alt} loading="lazy" />
        </div>
        <div className="about-text">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
