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
          <div className="row center mx-auto mb-5">
            <div className="col-md-10 center">
              <div className="col-md-10">
                <p>I am a senior-level technologist and web developer with over a decade of experience, adept at seamlessly blending design and development. My expertise lies in creating custom, responsive, and dynamic digital solutions, from marketing sites and web apps to email templates and CMS experiences.</p>
                <br/>
                <p>Proficient in technologies like React, HTML5, Sass, Javascript, and PHP, I take pride in delivering visually appealing, efficient, and effective projects. My comprehensive approach covers planning, design, prototyping, and coding, resulting in user-friendly interfaces that are both attractive and well-documented. With a diverse portfolio, I have collaborated with clients across various industries, offering tailored solutions to meet their specific goals. As a creative problem-solver, I thrive on challenging projects and consistently deliver high-quality results. Whether developing a new website or enhancing an existing one, I bring expertise, dedication, and passion to every project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
