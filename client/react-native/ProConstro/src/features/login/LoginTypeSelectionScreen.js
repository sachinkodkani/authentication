import * as React from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import styled from "styled-components/native";

export default class LoginTypeSelectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <ButtonWrapper>
          <ButtonText>'Admin'</ButtonText>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonText>'Employee'</ButtonText>
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonText>'Client'</ButtonText>
        </ButtonWrapper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #F0FFFF;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: ${widthPercentageToDP("50%")};
  height: ${heightPercentageToDP("10%")};
  border-radius: 1;
  background-color: #87CEEB;
  bordercolor: red;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 10;
  text-align: center;
`;
