import React, { useCallback, useState } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import { useDispatch } from "react-redux";
import { getNews } from "../stores/reducer/cardNews";
import { getImage } from "../stores/reducer/images";


export default function ErroPage() {
    const [ refreshing,setRefreshing ] = useState(false)
    const dispatch = useDispatch()
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        dispatch(getImage())
        dispatch(getNews())
        .then(_ => setRefreshing(false))
        .catch(_ => setRefreshing(false))
    })
    return (
        <>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text>EWrrrr</Text>
            </ScrollView>
        </>
    )
}