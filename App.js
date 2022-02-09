import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import Root_eng from "./navigation/Root_eng";
import { StatusBar } from "expo-status-bar";

const App = () => {
    return (
        <NavigationContainer>
            <Root_eng />
            <StatusBar hidden={true}></StatusBar>
        </NavigationContainer>
    );
};

export default App;
