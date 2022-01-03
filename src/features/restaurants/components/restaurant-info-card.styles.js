import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const Info = styled(Card.Content)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]}
    ${(props) => props.theme.space[0]};
`;

export const Star = styled(SvgXml)`
  margin-top: ${(props) => props.theme.space[1]};
`;

export const Rating = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const Reviews = styled.View`
  flex-direction: row;
`;

export const Times = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  height: ${(props) => props.theme.sizes[1]};
  width: ${(props) => props.theme.sizes[1]};
`;
