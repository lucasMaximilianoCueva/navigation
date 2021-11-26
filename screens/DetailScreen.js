import { Image, Text, View } from 'react-native'

import React from 'react'

const DetailScreen = ({ route }) => {

    const { image } = route.params

    return (
        <View>
            <Image 
                source={{uri: image.src, height: 350}}
            />
            <Text>price: {image.price}</Text>
        </View>
    )
}

export default DetailScreen
