import { func } from "prop-types";
import React from "react";
import State from "./State"

class Auth extends React.Component {
  constructor() {
      super();
    this.sate = { name: "JAmshid", isAdmin: false };
  }
  render() {
    if (this.sate.name) {
      return (
          <>
    <h3>Salom {this.sate.name}</h3>;
    <State/>
          </>
      )
    } else {
      return <p>Hello Anonim</p>;
    }
  }
}
export default Auth;
