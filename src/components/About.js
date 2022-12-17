import React from "react";
import { Outlet } from "react-router-dom";

class AboutUs extends React.Component {
  constructor() {
    super();
    console.log("about constructor called");
  }
  componentDidMount() {
    console.log("about component did mount");
  }
  componentDidUpdate() {
    console.log("about compoenent did update");
  }
  render() {
    console.log("about render called");
    return (
      <div className="pt-3">
        <h1> About Us Class Component</h1>
        <Outlet />
      </div>
    );
  }
}
export default AboutUs;
