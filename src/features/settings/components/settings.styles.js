import styled from "styled-components/native";
import { List } from "react-native-paper";

import { SafeAreaView } from "../../../components/utility/safe-area.component";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const FavouritesSafeArea = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;
