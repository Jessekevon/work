import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }

    return (
      <section className="about">
        <div className="col-md-12">
          <h1>About</h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <p>Jesse Kevon is an experienced web engineer with a focus on front-end and UI development. With nine years of experience, Jesse has honed his skills to create custom, responsive, and dynamic WordPress themes, marketing sites, email templates, and mobile/web apps. He takes pride in writing clean, semantic code using React, HTML5, Sass, Javascript, and PHP, ensuring visually appealing, efficient, and effective projects.</p>
                <br/>
                <p>Jesse has worked with diverse clients across various industries, offering tailored solutions to help them achieve their goals. He is a creative problem-solver who enjoys taking on challenging projects, delivering high-quality results. Whether developing a new website or improving an existing one, Jesse brings expertise, dedication, and passion to every project he undertakes.</p>
                <p><a target="_blank" href="https://jessekevon.github.io/work/images/Resume.pdf">View Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
