import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mainScreen from "../screens/mainScreen";
import homeScreen from "./homeScreen";
import mainScreen_eng from "../screens/mainScreen_eng";
import TopTab from "./TopTab";
import TopTab_eng from "./TopTab_eng";
import { colors } from "../variables/colors";
import Detail from "./Detail";
import Detail_eng from "./Detail_eng";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: colors.orangeRed,
                },
                headerTitleStyle: {
                    fontSize: 20,
                },
                headerTintColor: "white",
            }}>
            <NativeStack.Screen
                name="Main"
                component={mainScreen_eng}
                options={{ headerShown: false }}></NativeStack.Screen>
            <NativeStack.Screen
                name="Home"
                component={homeScreen}></NativeStack.Screen>
            <NativeStack.Screen
                name="Category"
                component={TopTab_eng}
                options={{
                    headerTitle: "Smart Tourism"}}></NativeStack.Screen>
            <NativeStack.Screen
                name="Detail"
                component={Detail_eng}
                options={{ headerShown: false }}></NativeStack.Screen>
        </NativeStack.Navigator>
    );
};

export default Stack;
