import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from '../assets/styles/style'

export default function News({ news }) {
    const navigate = useNavigation()

    return (
        <Pressable
            key={news.img}
            onPress={() => navigate.navigate('News', {
                title: news.title,
                img: news.img,
                postDate: news.created_at,
                article: news.content
            })}
        >
            <View style={styles.containerNews}>
                <Image
                    style={styles.imageNews}
                    source={{
                        uri: `http://localhost:3001/api/image/${news.img}`
                    }}
                />
                <View style={styles.textNews}>
                    <Text style={styles.titleNews}>{news.title}</Text>
                    <Text style={[styles.textDate]}>{news.created_at}</Text>
                </View>
            </View>
        </Pressable>
    )
}