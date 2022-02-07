import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, List } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AvatarContainer, SettingsItem } from "../components/settings.styles";
import { PHOTO_KEY } from "./camera.screen";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  useFocusEffect(() => {
    (async () => {
      try {
        const uri = await AsyncStorage.get(`${PHOTO_KEY}-${user.uid}`);
        setPhoto(uri);
      } catch (err) {}
    })();
  });

  return (
    <SafeAreaView>
      <AvatarContainer>
        <Spacer position="top" size="large" />
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="tomato"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="caption">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourite food places"
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          description="Exit from MealsToGo"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};
