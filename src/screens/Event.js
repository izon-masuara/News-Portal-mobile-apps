import * as React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from '../assets/styles/style'

export default EventPage = () => {
    return (
        <ScrollView style={{ backgroundColor: '#e3f2fd', padding: 5 }}>
            <View style={styles.containerEvents}>
                <Image
                    style={styles.images}
                    source={{
                        uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBINaR8PpAUOenjmdu43_ELvZ_ZNAFRhK_YQ&usqp=CAU`
                    }}
                />
                <Text style={styles.textEvent}>Event ini merupakan event tahunan yang di selenggarakan ...</Text>
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={styles.textDate}>Waktu pelaksanaan : 20 juni 2022</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerEvents}>
                <Image
                    style={styles.images}
                    source={{
                        uri: `https://4.bp.blogspot.com/-GcCrsuda2dE/XH0o7xxmWAI/AAAAAAAAAUw/f4sFEuwGczgHztvxZdNzlJfJsNAMGu6pACLcBGAs/s400/IMG-20190304-WA0029.jpg`
                    }}
                />
                <Text style={styles.textEvent}>Event ini merupakan event tahunan yang di selenggarakan ...</Text>
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={styles.textDate}>Waktu pelaksanaan : 22 agustus 2022</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerEvents}>
                <Image
                    style={styles.images}
                    source={{
                        uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBINaR8PpAUOenjmdu43_ELvZ_ZNAFRhK_YQ&usqp=CAU`
                    }}
                />
                <Text style={styles.textEvent}>Event ini merupakan event tahunan yang di selenggarakan ...</Text>
                <View style={styles.containerNews}>
                    <View style={styles.textNews}>
                        <Text style={styles.textDate}>Waktu pelaksanaan : 20 juni 2022</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}