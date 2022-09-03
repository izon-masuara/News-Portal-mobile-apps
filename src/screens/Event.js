import * as React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from '../assets/styles/style'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getEvents } from '../stores/reducer/events'
import { baseUrl } from '../stores/reducer/config'

export default EventPage = () => {
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    if(error) return <Text>err</Text>
    if(loading) return <Text>loading</Text>

    return (
        <ScrollView style={{padding: 5 }}>
            {
                data.map(el => {
                    return (
                        <View style={styles.containerEvents} key={el.img}>
                            <Image
                                style={styles.eventImg}
                                source={{
                                    uri: `${baseUrl}/image/${el.img}`
                                }}
                            />
                            <Text style={styles.textEvent}>{el.title}</Text>
                            <View style={styles.containerNews}>
                                <View style={styles.textNews}>
                                    <Text style={styles.textDate}>Waktu pelaksanaan : {el.time}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}