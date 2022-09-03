import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from "../assets/styles/style";
import content from 'arraybuffer-to-string'
import { baseUrl } from "../stores/reducer/config";

export default NewsScreen = ({ route: { params } }) => {
    const uint8 = new Uint8Array(params.article.data)
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.newsScreenImg}>
                <Text style={styles.newsTitle}>{params.title}</Text>
                <Image
                    style={styles.newsImage}
                    source={{
                        uri: `${baseUrl}/image/${params.img}`
                    }}
                />
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={styles.textDate}>Post date : {params.postDate}</Text>
                    </View>
                </View>
                <Text style={styles.textNews}>
                    {`${content(uint8)}`}
                </Text>
            </View>
        </ScrollView>
    )
}