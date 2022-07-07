import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, Pressable } from 'react-native'
import { styles } from '../assets/styles/style'
import { useSelector } from 'react-redux'

const db = [
    {
        title: 'Seorang anak di nyatakan hilang di sebuah rumah tua',
        img: 'https://wallpaperaccess.com/full/1356240.jpg',
        postDate: '2 februari 2020',
        article: `
        When I was a kid growing up in Southern California, there was a phone number you could call to find out what time it was. It was a local number, 853-1212 (easy to remember as the arrangement of the numbers on the keypad made a capital T),and I used it all the time, to set watch, adjust the alarm clock, fix the display on the VCR.I don’t recall the last time I used it, probably sometime in the mid ’90s, but I do remember clearly the sound of the voice at the other end of the line.

        Services like these were called speaking clocks (although I never called them that; to me,it was just “calling Time”), and they date back to the early 1930s or so. In the U.S.,most were powered by a machine called an Audichron that used mechanical drums to play back the time of day, often with a little advertisement or the current temperature to go along with it.
        `
    },
    {
        title: 'Taman yang indah merupakan sebuah objek wisata yang di gemari',
        img: 'https://www.teahub.io/photos/full/99-995758_nature-images-hd-large-size.jpg',
        postDate: '30 maret 2020',
        article : `
        When I was a kid growing up in Southern California, there was a phone number you could call to find out what time it was. It was a local number, 853-1212 (easy to remember as the arrangement of the numbers on the keypad made a capital T),and I used it all the time, to set watch, adjust the alarm clock, fix the display on the VCR.I don’t recall the last time I used it, probably sometime in the mid ’90s, but I do remember clearly the sound of the voice at the other end of the line.
        
        Services like these were called speaking clocks (although I never called them that; to me,it was just “calling Time”), and they date back to the early 1930s or so. In the U.S.,most were powered by a machine called an Audichron that used mechanical drums to play back the time of day, often with a little advertisement or the current temperature to go along with it.
        `
    },
    {
        title: 'Teknologi terbaru telah muncul',
        img: 'https://www.jakartanotebook.com/images/products/61/63/16008/2/holder-smartphone-motor-waterproof-large-size-zj-04-black-116.jpg',
        postDate: '5 april 2020'
    },
    {
        title: 'Seorang anak di nyatakan hilang di sebuah rumah tua1',
        img: 'https://wallpaperaccess.com/full/1356240.jpg',
        postDate: '2 februari 2020'
    },
    {
        title: 'Taman yang indah merupakan sebuah objek wisata yang di gemari1',
        img: 'https://www.teahub.io/photos/full/99-995758_nature-images-hd-large-size.jpg',
        postDate: '30 maret 2020'
    },
    {
        title: 'Teknologi terbaru telah muncul kembali',
        img: 'https://www.jakartanotebook.com/images/products/61/63/16008/2/holder-smartphone-motor-waterproof-large-size-zj-04-black-116.jpg',
        postDate: '5 april 2020'
    },
]

export default function News() {
    const navigate = useNavigation()
    const news = useSelector(state => state.images.news)
    return (
        news.length <= 0 ? <Text>Data not Found</Text> :
            news.map(el => {
                return (
                    <Pressable
                        key={el.img}
                        onPress={() => navigate.navigate('News',{
                            title : el.title,
                            img : el.img,
                            postDate : el.created_at,
                            article : el.content
                        })}
                    >
                        <View style={styles.containerNews}>
                            <Image
                                style={styles.imageNews}
                                source={{
                                    uri: `http://localhost:3001/api/image/${el.img}`
                                }}
                            />
                            <View style={styles.textNews}>
                                <Text style={styles.titleNews}>{el.title}</Text>
                                <Text style={[styles.textDate]}>{el.created_at}</Text>
                            </View>
                        </View>
                    </Pressable>
                )
            })
    )
}