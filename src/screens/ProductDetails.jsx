import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import LinearGradient from "react-native-linear-gradient";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {addToCart} from "../redux/actions/cartActions";

const ProductDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { product } = route.params;

    const colorsArray = ["#91A1B0", "#B11D1D", "#1F44A3", "#9F632A", "#1D752B", "#000000"];

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
            dispatch(addToCart(product, selectedSize, selectedColor));
            navigation.navigate('CartScreen');
        } else {
            alert("Please select both size and color.");
        }
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <ArrowLeftIcon size={24} color="#E96E6E" />
            </TouchableOpacity>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
            </View>
            <Text style={[styles.fontText, styles.sizeText]}>Size</Text>
            <View style={styles.sizeContainer}>
                {["S", "M", "L", "XL"].map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.sizeValueContainer,
                            selectedSize === size && styles.selectedSizeContainer,
                        ]}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text
                            style={[
                                styles.sizeValueText,
                                selectedSize === size && styles.selectedText,
                            ]}
                        >
                            {size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* color container */}
            <View style={styles.colorContainer}>
                {colorsArray.map((color, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedColor(color)}
                    >
                        <View
                            style={[
                                styles.borderColorCircle,
                                selectedColor === color && {
                                    borderColor: color,
                                    borderWidth: 2,
                                    borderRadius: 24,
                                },
                            ]}
                        >
                            <View
                                style={[styles.colorCircle, { backgroundColor: color }]}
                            ></View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    headerContainer: {
        padding: 10,
    },
    image: {
        height: "60%",
        width: "100%",
        resizeMode: "cover",
        flex: 1,
    },
    contentContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
        fontFamily: "Poppins",
        color: "#444444",
    },
    price: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Poppins",
        color: "#4D4C4C",
    },
    fontText: {
        fontSize: 20,
        fontFamily: "Poppins",
        fontWeight: "700",
        color: "#444444",
    },
    sizeText: {
        marginLeft: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 5,
    },
    sizeValueContainer: {
        backgroundColor: "#FFFFFF",
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
    },
    sizeValueText: {
        fontSize: 18,
        fontFamily: "Poppins",
        fontWeight: "700",
    },
    selectedText: {
        color: "#E55B5B",
    },
    selectedSizeContainer: {
        borderColor: "#E55B5B",
        borderWidth: 2,
        borderRadius: 20,
    },
    colorContainer: {
        flexDirection: "row",
    },
    borderColorCircle: {
        height: 48,
        width: 48,
        padding: 5,
        marginHorizontal: 5,
    },
    colorCircle: {
        flex: 1,
        borderRadius: 18,
    },
    button: {
        backgroundColor: "#E96E6E",
        height: 62,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin: 20,
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
        fontFamily: "Poppins",
    },
    backButton: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 20,
        flex: 1,
    },
});

export default ProductDetails;
