import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import detailScreen from "../screens/detailScreen";
import detailScreen_eng from "../screens/detailScreen_eng";
import { colors } from "../variables/colors";
import weather from "../screens/weather";
import weather_eng from "../screens/weather_eng";
import map from "../screens/map";

const Material = createMaterialTopTabNavigator();

const DetailTobTab_eng = ({ route }) => {
    const {
        params: { contents, wholeData },
    } = route;
    return (
        <Material.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 130 },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.orangeRed,
                },
            }}>
            <Material.Screen
                name="Intro"
                component={detailScreen_eng}
                initialParams={{ contents: contents, data: wholeData }}></Material.Screen>
            <Material.Screen
                name="Weather"
                component={weather_eng}
                initialParams={{ contents: contents }}></Material.Screen>
            <Material.Screen
                name="Map"
                component={map}
                initialParams={{ contents: contents }}></Material.Screen>
        </Material.Navigator>
    );
};

export default DetailTobTab_eng;
