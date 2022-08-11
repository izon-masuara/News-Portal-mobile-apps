import * as React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Text, Pressable, Image, View, Linking } from 'react-native'
import { styles } from '../assets/styles/style'
import { useSelector } from 'react-redux'

export default PublicDocuments = ({ navigation }) => {
    const [login, setLogin] = useState(false)
    const { loading, error } = useSelector(state => state.login)
    const openWeb = () => {
        Linking.openURL('https://drive.google.com/drive/folders/11Ceh5ifdtqFFFqmPRlmZ6uEW8WG1VhCx')
    }

    const openScholarship = () => {
        Linking.openURL('https://drive.google.com/drive/folders/1DT-B1fHk5EDkKuqQJZ0uWTWrh-uOnH5E')
    }

    const openHistory = () => {
        Linking.openURL('https://www.perhimagi.com/sejarah/')
    }

    const logout = async () => {
        try {
            await AsyncStorage.clear()
            setLogin(false)
        } catch (err) {
            console.log(err)
        }
    }

    const check = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token) setLogin(true)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            check()
        })
        check()
    }, [loading])
    if (loading) return <Text>Loading</Text>
    if (error) {
        navigation.navigate('Login')
    }

    return (
        login ?
            <>
                <Text style={styles.title}>Public Documents</Text>
                <Pressable
                    onPress={() => openWeb()}
                >
                    <View style={styles.containerLink}>
                        <Image
                            source={require('../assets/icons/library.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Text style={styles.buttonLink}>Digital Library</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => openScholarship()}
                >
                    <View style={styles.containerLink}>
                        <Image
                            source={require('../assets/icons/student-loan.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Text style={styles.buttonLink}>Scholarship</Text>
                    </View>
                </Pressable>
                <Text style={styles.title}>About Us</Text>
                <Pressable
                    onPress={() => openHistory()}
                >
                    <View style={styles.containerLink}>
                        <Image
                            source={require('../assets/icons/history.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Text style={styles.buttonLink}>History</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Organitation')}
                >
                    <View style={styles.containerLink}>
                        <Image
                            source={require('../assets/icons/employees.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Text style={styles.buttonLink}>Organizational Structure</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => logout()}
                >
                    <View style={
                        [
                            styles.containerLink,
                            {
                                justifyContent: 'center',
                                margin: 50,
                                borderWidth: 1,
                                borderRadius: 20,
                                backgroundColor: 'white',
                                padding: 4
                            }
                        ]
                    }>
                        <Image
                            source={require('../assets/icons/logout.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Text style={styles.buttonLink}>Logout</Text>
                    </View>
                </Pressable>
            </>
            :
            <>
                <>
                    <Text style={styles.title}>Public Documents</Text>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={styles.containerLink}>
                            <Image
                                source={require('../assets/icons/library.png')}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                            <Text style={styles.buttonLink}>Digital Library</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={styles.containerLink}>
                            <Image
                                source={require('../assets/icons/student-loan.png')}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                            <Text style={styles.buttonLink}>Scholarship</Text>
                        </View>
                    </Pressable>
                    <Text style={styles.title}>About Us</Text>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={styles.containerLink}>
                            <Image
                                source={require('../assets/icons/history.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                            <Text style={styles.buttonLink}>History</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={styles.containerLink}>
                            <Image
                                source={require('../assets/icons/employees.png')}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                            <Text style={styles.buttonLink}>Organizational Structure</Text>
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <View style={
                            [
                                styles.containerLink,
                                {
                                    justifyContent: 'center',
                                    margin: 50,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    backgroundColor: 'white',
                                    padding: 4
                                }
                            ]
                        }>
                            <Image
                                source={require('../assets/icons/logout.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                            <Text style={styles.buttonLink}>Login</Text>
                        </View>
                    </Pressable>
                </>
            </>
    )
}