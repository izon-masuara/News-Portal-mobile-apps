import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from "../assets/styles/style";

export default NewsScreen = ({ route: { params } }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.newsScreenImg}>
                <Text style={styles.newsTitle}>{params.title}</Text>
                <Image
                    style={styles.newsImage}
                    source={{
                        uri: params.img
                    }}
                />
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={[styles.textDate, { paddingBottom: 10 }]}>Post date : {params.postDate}</Text>
                        <Text>
                            {params.article}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}