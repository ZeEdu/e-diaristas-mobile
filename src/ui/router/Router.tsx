import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import Logo from "@assets/img/logos/e-diaristas-logo.png";
import { NavigationTheme } from "ui/themes/app-theme";
import Index from "pages/Index";
import EncontrarDiarista from "pages/Encontrar-diarista";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Index: undefined;
  EncontrarDiaristas: undefined;
};

const Router = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={"Index"}
          component={Index}
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                style={{ width: 150, height: 50, resizeMode: "contain" }}
                source={Logo}
              />
            ),
          }}
        />
        <Stack.Screen
          name={"EncontrarDiaristas"}
          component={EncontrarDiarista}
          options={{ title: "Encontrar a diarista" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
