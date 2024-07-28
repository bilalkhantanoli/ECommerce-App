import { React, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/favoriteActions";

import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json"

const HomeScreen = () => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const toggleFavorite = (product) => {
        if (favorites.some((item) => item.id === product.id)) {
            dispatch(removeFavorite(product));
        } else {
            dispatch(addFavorite(product));
        }
    }
    const isFavorite = (product) => {
        return favorites.some(fav => fav.id === product.id);
    };

    const catergories = ["Trending Now", "All", "New", "Men", "Women"];
    const [selectCatogry, setSelectCatogry] = useState(catergories[0]);
    const [product, setProduct] = useState(data.products);

    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}>
            <Header />

            {/* Product Card */}
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <Text style={styles.header}>
                            Match Your Style
                        </Text>
                        {/* Text input section */}
                        <View style={styles.textInput}>
                            <View style={{ marginHorizontal: 10 }}>
                                <Fontisto name="search" size={20} color="#COCOC" />
                            </View>
                            <TextInput placeholder="Search" style={styles.search} />
                        </View>

                        {/* category section */}
                        <FlatList data={catergories}
                            renderItem={({ item }) => (<Category
                                item={item}
                                selectCatogry={selectCatogry}
                                setSelectCatogry={setSelectCatogry}
                            />)
                            }
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }
                data={product}
                renderItem={({ item }) => <ProductCard
                    item={item}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                />}
                keyExtractor={(item) => item.id.toString()}

            />
        </LinearGradient>

    );
};
var styles = StyleSheet.create({
    linearGradient: {
        padding: 20,

    },
    header: {
        fontSize: 28,
        fontWeight: '400',
        fontFamily: 'Poppins',
        marginTop: 25,
        color: '#00000',
    },
    search: {
        flex: 1,
        fontSize: 18,
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 20
    }

});

export default HomeScreen;
