import React from "react";
import { Text,View } from 'react-native'
import { styles } from "../assets/styles/style";

const PopUp = () => {
    return(
        <View style={styles.containerEvents}>
            <Text style={styles.title}>Login Before</Text>
        </View>
    )
}

export default LibraryPage = ({ route }) => {
    const { login } = route.params
    return (
        login ?
            <Text>Library</Text>
            :
            <PopUp/>

    )
}