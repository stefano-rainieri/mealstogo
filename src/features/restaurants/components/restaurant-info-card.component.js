import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

const Info = styled(Card.Content)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]}
    ${(props) => props.theme.space[0]};
`;

const Star = styled(SvgXml)`
  margin-top: ${(props) => props.theme.space[1]};
`;

const Rating = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Reviews = styled.View`
  flex-direction: row;
`;

const Times = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  margin-left: ${(props) => props.theme.space[3]};
`;

const Icon = styled.Image`
  height: ${(props) => props.theme.sizes[1]};
  width: ${(props) => props.theme.sizes[1]};
  margin-left: ${(props) => props.theme.space[3]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    address = "100 some random street",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isClosedTemporarily = false,
    name = "Some Restaurant",
    isOpenNow = true,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking.jpg",
    ],
    rating = 4.5,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Card.Title title={name} subtitle={address} />
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Reviews>
          {ratingArray.map((item, index) => (
            <Star xml={star} width={20} height={20} key={index} />
          ))}
          <Rating>&nbsp;&nbsp;({rating})</Rating>
        </Reviews>
        <Times>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <Open xml={open} width={20} height={20} />}
          <Icon source={{ uri: icon }} />
        </Times>
      </Info>
      <Card.Actions />
    </Card>
  );
};
