import * as React from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { styles } from '../assets/styles/style'

import News from '../components/News'

export default HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={{ backgroundColor: '#e3f2fd', padding: 5 }}>
            <View style={styles.containerImages}>
                <Image
                    style={styles.images}
                    source={{
                        uri: `https://www.thalassamanado.com/wp-content/uploads/2018/07/map-preview.png`
                    }}
                />
            </View>
            <News />
        </ScrollView>
    )
}