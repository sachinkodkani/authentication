import * as React from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import styled from "styled-components/native";
import images from 'res/images';

export default class LoginTypeSelectionScreen extends React.Component {
  render() {
    return (
      <Container>

      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const Header = styled.View`
  flex-direction: row;
  background-color: ${props.theme.colorOption.PRIMARY_COLOR};
`;

const HeaderText = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_EXTRA_LARGE};
  color: ${props => props.theme.colorOption.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const Body = styled.View`
  flex-direction: column;
  background-color : ${props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const Segment = styled.View`
  flex-direction: column;
`;

const Footer = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;


