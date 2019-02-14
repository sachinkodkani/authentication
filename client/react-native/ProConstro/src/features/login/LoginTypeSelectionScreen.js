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
        <HeaderContainer>
          <HeaderText>Choose You Role !</HeaderText>
        </HeaderContainer>
        <ButtonContainer>
          <ButtonWrapper>
            <ButtonText>Admin</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonText>Employee</ButtonText>
          </ButtonWrapper>
          <ButtonWrapper>
            <ButtonText>Client</ButtonText>
          </ButtonWrapper>
        </ButtonContainer>
      </Container>
    );
  }
}

const Container = styled.View`
flex: 1;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction : column;
  background-color: #E4BDFF;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.View`
  height : ${heightPercentageToDP('10%')};
  flex-direction : row;
  background-color: #66DBFF;
  align-items: center;
  justify-content: center;
`;


const HeaderText = styled.Text`
  color: black;
  font-size: 30;
  text-align: center;
`;

const ButtonWrapper = styled.TouchableOpacity`
  width: ${widthPercentageToDP("40%")};
  height: ${heightPercentageToDP("8%")};
  border-radius: 10;
  margin-top:10;
  justify-content: center;
  background-color: #FF5E1F;
  border-color: red;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 20;
  text-align: center;
`;
