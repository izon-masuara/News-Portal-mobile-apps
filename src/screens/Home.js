import * as React from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import { styles } from '../assets/styles/style'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { getImage,getNews } from '../stores/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//  Demesions from react native will give you size of the window screen

import News from '../components/News'

export default HomeScreen = () => {
    const [loading, setLoading] = useState(true)
    const imagesId = useSelector(state => state.images.images)
    const news = useSelector(state => state.images.news)
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(getImage())
            dispatch(getNews())
            setLoading(false)
        }, 4000);
    }, [])

    if (loading === true) {
        return (
            <View style={styles.openingContainer}>
                <View>
                    <View style={styles.openingBox}>
                        <Image
                            style={{
                                height: 150,
                                width: 150,
                                borderRadius: 180
                            }}
                            source={require('../assets/icons/employees.png')}
                        />
                        <Text style={styles.title}>PERHIMAGI</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: '#e3f2fd', padding: 5 }}>
            <View style={styles.containerImages}>
                <SwiperFlatList
                    autoplay
                    autoplayDelay={3}
                    autoplayLoop
                    showPagination
                    paginationDefaultColor='white'
                    paginationActiveColor='#00bcd4'
                    data={imagesId}
                    renderItem={({ item }) => (
                        <View style={styles.images}>
                            <Image
                                style={styles.images}
                                source={{
                                    uri: `http://localhost:3001/api/image/${item}`
                                }}
                            />
                        </View>
                    )}
                />
            </View>
            <News/>
        </ScrollView>
    )
}