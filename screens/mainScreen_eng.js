import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, Image, View, StatusBar, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const mainScreen_eng = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.welcome__text}>
                <Text style={styles.welcome__text__title}>Welcome</Text>
                <Text style={styles.welcome__text__subtitle}>TO SMART HEALING TOUR</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.main__row}>
                    <View style={styles.main__contents}>
                        <Image
                            resizeMode={"contain"}
                            source={require("../images/suit-case.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>Best Tour Packages</Text>
                    </View>
                    <View style={styles.main__contents}>
                        <Image
                            source={require("../images/map.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>My Travel Itinerary</Text>
                    </View>
                </View>
                <View style={styles.main__row}>
                    <View style={styles.main__contents}>
                        <Image
                            source={require("../images/site.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>Hallasan Beacon</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.main__contents}
                        onPress={() => navigation.navigate("Category")}>
                        <Image
                            source={require("../images/activity.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>Tourist Attractions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main__row}>
                    <View style={styles.main__contents}>
                        <Image
                            source={require("../images/restaurant.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>Accommodation</Text>
                    </View>
                    <View style={styles.main__contents}>
                        <Image
                            source={require("../images/chatbot.png")}
                            style={styles.main__contents__logo}></Image>
                        <Text style={styles.main__contents__text}>Chatbot</Text>
                    </View>
                </View>
            </View>
            <StatusBar barStyle="dark-content" />
        </View>
    );
};
export default mainScreen_eng;
