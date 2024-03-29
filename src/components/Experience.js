import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2 tech-badge" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work years-badge"
            date={work.years}
            iconStyle={{
              background: "#000",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fa fa-code experience-icon"></i>}
            key={i}
          >
            <h4
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h5>
            <p className="work-experience">{work.description}</p>
            <div style={{ textAlign: "left", marginTop: "18px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h2 className="section-title">Resume</h2>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#000",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fa fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
