import React from "react";
import { createStackNavigator } from "react-navigation";
import EventsScreen from "../screens/eventsScreen";
import BlueScreen from "../screens/blueScreen";

export default (AppNavigation = createStackNavigator(
  {
    Events: EventsScreen,
    Blue: BlueScreen
  },
  {
    initialRouteName: "Events"
  }
));
