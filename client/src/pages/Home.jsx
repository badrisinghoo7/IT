import React from "react";
import style from "./Home.module.css";
import image1 from "../assets/disccuss.jpg";
import image2 from "../assets/desk.jpg";
import image3 from "../assets/disccuss.jpg";
import image4 from "../assets/discussionArea.jpg";
import image5 from "../assets/training.jpg";
import image6 from "../assets/working.jpg";
import image7 from "../assets/watchingGirl.jpg";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.whoWeR}>
        <div>
          <h1>Who We Are</h1>
          <h3>
            We are a company of IT professionals who passionately believe that
            good quality products & services are delivered by great resources.
            With a focus on high quality, low maintenance, and self-driven
            technologies, Aparna IT Solutions differentiates itself from the
            competition by uniquely putting you in an advantageous position
            through our SWAT team of IT professionals, compared to other
            providers who try to provide value via a large army of resources.
            Aparna IT Solutions, along with its Indian counterpart Carnation
            Infotech, is a full-service IT consulting and staffing company for
            Fortune 1000 organizations and also helps startups build high-value
            without budget-breaking costs...
          </h3>
          <button onClick={() => (window.location.href = "/About-us-page")}>
            Read More
          </button>
        </div>
        <div>
          <img src={image1} alt="Image" />
        </div>
      </div>
      <div className={style.ourServicescontainer}>
        <div className={style.ourServices}>
          <h1>Our Services</h1>
        </div>
        <div className={style.ourServicesdiv}>
          <div>
            <img src={image2} alt="image" />
            <h3>Digital Transformation</h3>
            <p>
              We help enterprises around the globe in paving a way forward to
              efficient systems and innovative ways of scaling their business..
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img
              style={{ width: "300px", height: "300px" }}
              src={image3}
              alt="Image"
            />
            <h3>Software Product Engineering</h3>
            <p>
              Aparna IT Solutions provides reliable, and well-engineered
              software solutions by following best industry practices. Our team
              of developers works...
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={image4} alt="Image" />
            <h3>Data and Analytics</h3>
            <p>
              We transform and optimize the data generated by organizations into
              useful business knowledge to achieve the clients’ business
              goals...
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={image5} alt="Image" />
            <h3>CRM & Marketing Technology</h3>
            <p>
              For most organizations, fast and digitally enhanced interactions
              with customers have become an important aspect of their success...
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={image6} alt="Image" />
            <h3>Infrastructure and Security</h3>
            <p>
              We ensure the resilience and optimal performance of your IT
              infrastructure to help you focus on delivering organizational
              outcomes.
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={image7} alt="Image" />
            <h3>Technical Staff Augmentation</h3>
            <p>
              Technical Staff Augmentation allows organizations to choose
              candidates that fit their requirements and to add or cut their
              teams whenever needed.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;