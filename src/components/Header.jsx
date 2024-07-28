import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header(){

    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.appIconContainer}>
                <Image source={require("../assets/apps.png")} style={styles.appIcon} />
            </View>
            <Image source={require("../assets/profile.png")} style={styles.dp} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    appIcon: {
        height: 28,
        width: 28,
    },
    dp: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    appIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 40,
        width: 40,
        borderRadius: 20
    }
})