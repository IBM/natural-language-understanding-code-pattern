import "carbon-components/scss/globals/scss/styles.scss";

import React, { Component } from "react";
import Page from "../components/page";

const name = "Natural Language Understanding";

class Index extends Component {
  render() {
    return (
      <Page name={name}>
        <h1>Paste content here</h1>
      </Page>
    );
  }
}

export default Index;
