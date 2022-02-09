import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack_eng from "./Stack_eng";
import TopTab_eng from "./TopTab_eng";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator screenOptions={{ headerShown: false }}>
            <Nav.Screen name="Stack_eng" component={Stack_eng}></Nav.Screen>
            <Nav.Screen name="TopTab_eng" component={TopTab_eng}></Nav.Screen>
        </Nav.Navigator>
    );
};

export default Root;
