import React, { useMemo } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "../components/Header";
import CartCard from "../components/CardCard";
import { useSelector } from 'react-redux';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigation = useNavigation();

    // Calculate total price
    const totalPrice = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    }, [cartItems]);

    const handleCheckout = () => {
        // Implement checkout logic here
        console.log("Checkout pressed");
    };

    if (cartItems.length === 0) {
        return (
            <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
                <Header isCart={true} />
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
            <View style={styles.header}>
                <Header isCart={true} />
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
                <ArrowLeftIcon size={24} color="#E96E6E" />
            </TouchableOpacity>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <CartCard item={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
                ListFooterComponent={
                    <>
                        <View style={styles.bottomContentContainer}>
                            <View style={styles.flexRowContainer}>
                                <Text style={styles.titleText}>Total:</Text>
                                <Text style={styles.priceText}>${totalPrice.toFixed(2)}</Text>
                            </View>
                            <View style={styles.flexRowContainer}>
                                <Text style={styles.titleText}>Shipping:</Text>
                                <Text style={styles.priceText}>$0.00</Text>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.flexRowContainer}>
                                <Text style={styles.titleText}>Grand Total:</Text>
                                <Text style={[styles.priceText, styles.grandPriceText]}>
                                    ${totalPrice.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
                            <Text style={styles.buttonText}>Checkout</Text>
                        </TouchableOpacity>
                    </>
                }
            />
        </LinearGradient>
    );
};

export default CartScreen;


const styles = StyleSheet.create({
    emptyCartText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    container: {
        padding: 15,
    },
    header: {},
    flexRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    bottomContentContainer: {
        marginHorizontal: 10,
        marginTop: 30,
    },
    backButton: {
        position: "absolute",
        top: 14,
        left: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "500",
    },
    priceText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
    },
    divider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginTop: 10,
        marginBottom: 5,
    },
    grandPriceText: {
        color: "#3C3C3C",
        fontWeight: "700",
    },
    button: {
        backgroundColor: "#E96E6E",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
    },
});
