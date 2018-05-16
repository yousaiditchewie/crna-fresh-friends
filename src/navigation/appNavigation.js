import React from "react";
import { createStackNavigator } from "react-navigation";
import EventScreen from "../screens/eventScreen";
import BlueScreen from "../screens/blueScreen";

export default (AppNavigation = createStackNavigator(
  {
    Events: EventScreen,
    Blue: BlueScreen
  },
  {
    initialRouteName: "Events"
  }
));
