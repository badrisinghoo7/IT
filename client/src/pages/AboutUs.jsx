import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <h1 className="aboutUsHeading">About Us</h1>
      <div className="aboutparagraph">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
            cupiditate quae esse quidem quia, dicta a soluta quis beatae nihil
            aperiam aspernatur ipsa
          </p>
          <p>
            perspiciatis labore sequi quisquam quasi facere culpa obcaecati
            pariatur id cum explicabo omnis nemo quia perferendis iusto magnam
            voluptates quas eligendi, tempore est, iste quis! Eius nobis dolorem
            nihil exercitationem tempora laboriosam nulla impedit asperiores?
            Vel dolore perspiciatis quibusdam laborum officiis odio? Amet iusto
            quisquam molestiae aspernatur debitis{" "}
          </p>
          <p>
            labore rerum expedita nulla sunt, dolorum sit ducimus quis iure enim
            minima dolor repudiandae laudantium odit maxime. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero suscipit ab veritatis,
            molestiae autem esse neque consequuntur omnis quasi distinctio
            eligendi delectus aliquid maxime culpa accusamus, officia eaque aut.
            Accusamus, repudiandae. Quod aut animi beatae quaerat illum ut sint
            sequi alias minus laborum, explicabo aperiam tenetur porro nihil
            dignissimos voluptatem odit ex sapiente commodi veritatis vero
            eligendi nesciunt. Corporis, adipisci distinctio natus atque harum
            quae sapiente
          </p>
          <p>
            neque rem architecto assumenda ratione dolorem necessitatibus ut,
            facilis maiores perspiciatis delectus veniam qui! Laborum iure quasi
            id voluptatum corporis quam omnis natus voluptatibus maiores optio.
            Voluptas accusantium quam illum accusamus doloribus reprehenderit
            repellendus.
          </p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/about/abt-main.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="whoWeRHeading">Who We Are</h1>
      <div className="whoWeR">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          cupiditate quae esse quidem quia, dicta a soluta quis beatae nihil
          aperiam aspernatur ipsa
        </p>
        <p>
          perspiciatis labore sequi quisquam quasi facere culpa obcaecati
          pariatur id cum explicabo omnis nemo quia perferendis iusto magnam
          voluptates quas eligendi, tempore est, iste quis! Eius nobis dolorem
          nihil exercitationem tempora laboriosam nulla impedit asperiores? Vel
          dolore perspiciatis quibusdam laborum officiis odio? Amet iusto
          quisquam molestiae aspernatur debitis{" "}
        </p>
      </div>

      <div className="whoWeRdivs">
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/about/counter1.svg"
            alt=""
          />
          <h1>30 +</h1>
          <p>ACTIVE CLIENTS</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/about/counter4.svg"
            alt=""
          />
          <h1>15 +</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/about/counter2.svg"
            alt=""
          />
          <h1>200 +</h1>
          <p>ENGAGEMENTS</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/about/counter3.svg"
            alt=""
          />
          <h1>300 +</h1>
          <p>SKILLED PROFESSIONALS</p>
        </div>
      </div>

      {/* Leadership divs */}

      <h1 className="leaderShipHeading">LeaderShip</h1>

      <div className="leaderShip">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          cupiditate quae esse quidem quia, dicta a sol
        </h3>
        <p>
          perspiciatis labore sequi quisquam quasi facere culpa obcaecati
          pariatur id cum explicabo omnis nemo quia perferendis iusto
        </p>
      </div>

      <div className="leaderShipdivs">
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Abhay-Srivastava.jpg"
            alt=""
          />
          <h4>Abhay Shrivastava</h4>
          <p>President and CEO</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Prerna-Srivastava.jpg"
            alt=""
          />
          <h4>Prerna Shrivasta</h4>
          <p>Director - HR and Finance</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Shahnawaz-Kafil-Khan.jpg"
            alt=""
          />
          <h4>Shehnaaz Kafil Khan</h4>
          <p>Additional Director</p>
        </div>
      </div>

      <div className="leaderShipdivs">
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Prasanna-R.jpg"
            alt=""
          />
          <h4>Prasanna R</h4>
          <p>GM - Client Engagement & Delivery</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Gaurav-Julka.jpg"
            alt=""
          />
          <h4>Gaurav Julka</h4>
          <p>GM - Global Sales & Marketing</p>
        </div>
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Ganesh.jpg"
            alt=""
          />
          <h4>Ganesh R. Gore</h4>
          <p>GM - Global Sales & Marketing</p>
        </div>
      </div>

      <div className="leaderShipdivs">
        <div>
          <img
            src="https://www.cardinalintinc.com/assets/img/team/Srividya.jpg"
            alt=""
          />
          <h4>Srividya Rajagopalan</h4>
          <p>Manager - HR & Admin</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
