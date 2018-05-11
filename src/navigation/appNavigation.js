import React from 'react';
import { createStackNavigator } from "react-navigation";
import GreenScreen from "../screens/greenScreen";
import BlueScreen from "../screens/blueScreen";

export default AppNavigation = createStackNavigator(
    {
        Green: GreenScreen,
        Blue: BlueScreen
    },
    {
        initialRouteName: "Green"
    }
);

