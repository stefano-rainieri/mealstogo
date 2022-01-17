import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";
import { IS_ANDROID } from "../../utils/platform";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = IS_ANDROID && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};
