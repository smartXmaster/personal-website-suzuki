import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-box container">
        <div className="row">
          <div className="col-lg-4">
            <img src="/react-portfolio/image/eric-logo.jpg" alt="profile pic" />
          </div>
          <div className="col-12 col-lg">
            <div>
              <b>About</b>
              <hr />
              <p>
                Hello, my name is Eric Suzuki. Senior Software Developer with 7+
                Years of Experience. Experienced with numerous software
                technologies focusing on web and blockchain development. Got
                prize in ACM which is part of ICPC when I was a college student.
                Led development of $150K research project which was deemed a
                “silver standard” by the client. Increased client’s revenue
                2-fold after fine-tuning AI/ML-based algorithms. Provide
                high-quality code and power communication. Eager to support
                building an impeccable online reputation by providing high-level
                customer support for start-ups and firms. Worked on flexible
                projects for unlimited clients around the world. Strong at
                building architecture of backend systems and have good sensitive
                in frontend developing . Specialist at Test Driven Development.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
