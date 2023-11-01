const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import TypePrimarySizeSmall from "./components/TypePrimarySizeSmall";
import TextWhiteBackgroundOff from "./components/TextWhiteBackgroundOff";
import TVPlayer from "./screens/TVPlayer";
import News from "./screens/News";
import Balkanweb from "./screens/Balkanweb";
import Panorama from "./screens/Panorama";
import Menu from "./components/Menu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="TVPlayer"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TVPlayer"
              component={TVPlayer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News"
              component={News}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Balkanweb"
              component={Balkanweb}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Panorama"
              component={Panorama}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
