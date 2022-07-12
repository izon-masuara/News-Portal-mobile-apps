import React from "react";
import { Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import { hitLogin } from "../stores/reducer/login";
import { useDispatch, useSelector } from "react-redux";

export default Login = ({ navigation }) => {
    const { error } = useSelector(state => state.login)
    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const handleText = (name, value) => {
        setPayload({
            ...payload,
            [name]: value
        })
    }

    const sendPayload = () => {
        dispatch(hitLogin(payload))
        navigation.navigate('Home')
    }

    if (error) {
        return (
            <View>
                <Text>Please Try Again</Text>
                <Text>Login</Text>
                <TextInput
                    placeholder="Email"
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => handleText('email', text)}
                />
                <TextInput
                    placeholder="Password"
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => handleText('password', text)}
                />
                <Button
                    title="Login"
                    onPress={() => sendPayload()}
                />
            </View>
        )
    }

    return (
        <>
            <View>
                <Text>Login</Text>
                <TextInput
                    placeholder="Email"
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => handleText('email', text)}
                />
                <TextInput
                    placeholder="Password"
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => handleText('password', text)}
                />
                <Button
                    title="Login"
                    onPress={() => sendPayload()}
                />
            </View>
        </>
    )
}