import * as React from 'react'
import { View, Image, FlatList, Text, SafeAreaView } from 'react-native'
import { styles } from '../assets/styles/style'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { getImage } from '../stores/reducer/images';
import { getNews } from '../stores/reducer/cardNews';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

//  Demesions from react native will give you size of the window screen

import News from '../components/News'

export default HomeScreen = ({ navigation }) => {
    const { data: dataImg,error: errImg } = useSelector(state => state.images)
    const { data, loading, error } = useSelector(state => state.news)
    const [ loadImg,setLoadImg ] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getImage())
        dispatch(getNews())
        setTimeout(() => {
            setLoadImg(false)
        }, 4000);
    }, [])

    if (errImg) {
        return <Text>Error</Text>
    }


    if (loadImg) {
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
                            source={require('../assets/icons/logo-perhimagi.png')}
                        />
                        <Text style={styles.title}>PERHIMAGI</Text>
                    </View>
                </View>
            </View>
        )
    }

    const Component = () => {
        return (
            <>
                <View style={styles.containerImages}>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        showPagination
                        paginationDefaultColor='white'
                        paginationActiveColor='#00bcd4'
                        data={dataImg}
                        renderItem={({ item }) => (
                            <View style={styles.images}>
                                <Image
                                    style={[styles.images,styles.imageHome]}
                                    source={{
                                        uri: `http://localhost:3001/api/image/${item}`
                                    }}
                                />
                            </View>
                        )}
                    />
                </View>
                {
                    error ?
                        <Text>Error news</Text> :
                        <>
                            {
                                loading ?
                                    <Text>loading news</Text> :
                                    <>
                                        <FlatList
                                            data={data}
                                            renderItem={({ item }) => <News news={item} />}
                                        />
                                    </>
                            }
                        </>
                }
            </>
        )
    }


    return (
        <SafeAreaView>
            <FlatList
                data={[1]}
                renderItem={() => <Component />}
            />
        </SafeAreaView>
    )
}