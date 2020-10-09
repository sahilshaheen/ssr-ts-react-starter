import { RouteComponentProps } from "@reach/router";
import React from "react";

class About extends React.Component<
  RouteComponentProps,
  {
    msg: string;
  }
> {
  state = { msg: "G'day, dude" };
  render() {
    return (
      <>
        <h1>About Me</h1>
        <p>{this.state.msg}</p>
      </>
    );
  }
}

export default About;
