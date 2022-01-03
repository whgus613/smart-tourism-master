import { StyleSheet } from "react-native";
import { colors } from "../variables/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: colors.orangeRed,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    header__left: {
        flexDirection: "row",
        marginLeft: 10,
        alignItems: "center",
    },
    header__left__text: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        marginLeft: 7,
    },
    header__right: {
        alignItems: "flex-end",
        marginRight: 10,
    },
    welcome__text: {
        flex: 0.5,
        alignItems: "center",
        marginTop: 60,
    },
    welcome__text__title: {
        fontSize: 45,
        fontWeight: "800",
        fontStyle: "italic",
        color: colors.orangeRed,
    },
    welcome__text__subtitle: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "italic",
        color: colors.orangeRed,
        marginTop: 5,
        opacity: 0.7,
    },
    main: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    main__row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    main__contents: {
        paddingHorizontal: 11,
        paddingVertical: 10,
        alignItems: "center",
    },
    main__contents__logo: {
        width: 120,
        height: 120,
    },
    main__contents__text: {
        fontSize: 16,
        fontWeight: "700",
        opacity: 0.4,
        marginTop: 10,
    },
});

export default styles;
