const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash from "./screens/Splash";
import TVPlayer from "./screens/TVPlayer";
import Item from "./components/Item";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import Item3 from "./components/Item3";
import Item4 from "./components/Item4";
import Item5 from "./components/Item5";
import Item6 from "./components/Item6";
import Item7 from "./components/Item7";
import TypePrimarySizeSmall from "./components/TypePrimarySizeSmall";
import TextWhiteBackgroundOff from "./components/TextWhiteBackgroundOff";
import News from "./screens/News";
import Menu1 from "./components/Menu1";
import Balkanweb from "./screens/Balkanweb";
import Menu2 from "./components/Menu2";
import Panorama from "./screens/Panorama";
import Item8 from "./components/Item8";
import Item9 from "./components/Item9";
import Menu3 from "./components/Menu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Item6 />,
    <Item4 />,
    <Item2 />,
    <Item />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Item7 />,
    <Item5 />,
    <Item3 />,
    <Item1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="TVPlayer"
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="TVPlayer"
        component={TVPlayer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Balkanweb"
        component={Balkanweb}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Panorama"
        component={Panorama}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

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
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item1"
              component={Item1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item2"
              component={Item2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item3"
              component={Item3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item4"
              component={Item4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item5"
              component={Item5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item6"
              component={Item6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item7"
              component={Item7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item8"
              component={Item8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item9"
              component={Item9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu3"
              component={Menu3}
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
