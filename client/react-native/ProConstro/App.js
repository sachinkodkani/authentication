import React, { Component } from "react";
import LoginTypeSelectionScreen from "./src/features/login/LoginTypeSelectionScreen";
import styled from "styled-components/native";

export default class App extends Component {
  render() {
    return (
      <Container>
        <LoginTypeSelectionScreen />
      </Container>
    );
  }
}

const Container = styled.View``;
