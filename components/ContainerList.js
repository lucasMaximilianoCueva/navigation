import { FlatList, View } from 'react-native'

import Card from './Card'
import React from 'react'

const ContainerList = ({ route }) => {

    const { photos } = route.params

    const renderItem = (({item}) => <Card image={item} />)

    return (
        <View>
            <FlatList 
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </View>
    )
}

export default ContainerList
