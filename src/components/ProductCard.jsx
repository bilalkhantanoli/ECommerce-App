import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = ({ item, toggleFavorite, isFavorite }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ProductDetails', { product: item });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Image style={styles.coverImage} source={{ uri: item.image }} />
            <View style={styles.description}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.favoriteIcon}>
                {isFavorite(item) ?
                    <AntDesign name="heart" size={20} color="#E96E6E" />
                    :
                    <AntDesign name="hearto" size={20} color="#E96E6E" />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    coverImage: {
        height: 250,
        width: '90%',
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center'
    },
    productName: {
        fontWeight: '500',
        fontSize: 18,
        fontFamily: 'Poppins',
        color: '#000',
    },
    price: {
        fontWeight: '500',
        fontSize: 17,
        fontFamily: 'Poppins',
        color: '#9C9C9C',
    },
    description: {
        paddingHorizontal: 15
    },
    favoriteIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductCard;
