import React, { useContext } from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello, I'm Settings Screen!</Text>
        <Button onPress={onLogout}>Logout</Button>
      </View>
    </SafeAreaView>
  );
};
