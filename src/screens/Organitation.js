import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../stores/reducer/data";
import { styles } from "../assets/styles/style";
import { useNavigation } from "@react-navigation/native";

export default Organitation = () => {
    const { data, loading, error } = useSelector(state => state.organitation)
    const dispatch = useDispatch()
    const navigate = useNavigation()
    useEffect(() => {
        dispatch(getData())
    }, [])
    if (error) return <Text>Error</Text>
    if (loading) return <Text>Loading</Text>

    return (
        <>
            {
                data.map(el => {
                    
                    return (
                        <Pressable
                        key={el.img}
                        onPress={() => navigate.navigate('Organitation Screen', {
                            field: el.field,
                            img: el.img,
                            content : el.content,
                            description : el.description
                        })}
                        >
                            <View style={styles.containerNews}>
                                <View style={styles.textNews}>
                                    <Text style={styles.titleNews}>{el.field.toUpperCase()}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )
                })
            }
        </>
    )
}