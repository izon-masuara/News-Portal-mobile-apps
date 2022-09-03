import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from "../assets/styles/style";
import content from 'arraybuffer-to-string'
import { baseUrl } from "../stores/reducer/config";

export default NewsScreen = ({ route: { params } }) => {
    const uint8 = new Uint8Array(params.content.data)
    const article = content(uint8)
    const contentPayload = []
    let temp = {
        title: '',
        content: ''
    }
    let flag = false
    for (let i = 0; i < article.length; i++) {
        if (article[i] === '[') {
            flag = true
            contentPayload.push(temp)
            temp = {
                title: '',
                content: ''
            }
            continue
        }
        if (article[i] === ']') {
            flag = false
            continue
        }
        if (flag === true) {
            temp.title += article[i]
        } else {
            temp.content += article[i]
        }
        if (i === article.length - 1) {
            contentPayload.push(temp)
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.newsScreenImg}>
                <Text style={styles.newsTitle}>{params.field}</Text>
                <Image
                    style={styles.newsImage}
                    source={{
                        uri: `${baseUrl}/image/${params.img}`
                    }}
                />
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={styles.textDate}>{params.description}</Text>
                    </View>
                </View>
                <Text style={styles.textNews}>
                    {
                        contentPayload.slice(1).map(el => {
                            return (
                                <>
                                    <Text style={{fontWeight:'bold',fontSize:18}}>{el.title}</Text>
                                    <Text>{el.content}</Text>
                                </>
                            )
                        })
                    }
                </Text>
            </View>
        </ScrollView>
    )
}