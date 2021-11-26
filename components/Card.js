import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import DetailScreen from '../screens/DetailScreen';
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = ({ image }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={style.cardImage} 
            onPress={ () => navigation.navigate('DetailScreen', { image })} 
        >
            <Image 
            source={{
                uri: 
                    image.src ? image.src :
                'https://img1.freepng.es/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'
            }}
            style={{ height: 180, width: '100%' }}
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: '49.5%',
        marginRight: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        backgroundColor: '#2c292c',
        borderWidth: 0
    }
})

export default Card
