import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Category = ({item, selectCatogry, setSelectCatogry}) => {
    return (
        <TouchableOpacity onPress={() => setSelectCatogry(item)}>
            <Text style={[styles.text, selectCatogry === item &&
                { backgroundColor: '#E96E6E', color: '#fff' },]
            }>{item}</Text>
        </TouchableOpacity>
    );
};
export default Category;

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        fontWeight: '600',
        // backgroundColor: '#E96E6E',
        backgroundColor: '#DFDCDC',
        // color: '#fff',
        color: '#938F8F',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})
