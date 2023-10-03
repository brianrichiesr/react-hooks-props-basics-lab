import React from "react";
import Links from "./Links";

function About(props) {
  const bioElement = props.bio ? <p>{props.bio}</p> : null;
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioElement}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} />
      <Links linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
