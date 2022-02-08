import styled from "styled-components/native";
import { List } from "react-native-paper";

export const Accordion = styled(List.Accordion)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
