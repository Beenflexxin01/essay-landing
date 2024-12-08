import Image from "next/image";
import skill from "../../public/Images/skill.png";
function SkilledWriter() {
  return (
    <div className="container">
      <div className="grid-2 feature-grid">
        <div className="grid-2-cols feature-grid-2-col">
          <Image src={skill} alt="title" className="skill-img" />
        </div>
        <div className="grid-2-cols feature-grid-2-cols">
          <h2 className="secondary-header">Are you a skilled Writer?</h2>
          <div className="paragraph">
            <p className="text-description">
              Interested in a specific paper writer? Take a look at the
              writer&apos;s account to see their ratings, reviews, and order
              stats. Once you think they are the perfect fit, have them write
              paper for you.
            </p>
          </div>
          <ul className="skill-ul">
            <li className="skill-li">
              <span className="number">01</span>
              Register on the platform
            </li>
            <li className="skill-li">
              <span className="number">02</span>
              Apply for a job
            </li>
            <li className="skill-li">
              <span className="number">03</span>
              Complete the task
            </li>
            <li className="skill-li">
              <span className="number">04</span>
              Get Paid
            </li>
            <button className="cta-btn reg cta-btn-writer ">
              Register as a writer
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkilledWriter;
