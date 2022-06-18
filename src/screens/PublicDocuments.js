import * as React from 'react'
import { useEffect, useState } from 'react'
import { Text, Pressable, Image, View } from 'react-native'
import { styles } from '../assets/styles/style'

export default PublicDocuments = ({ navigation }) => {
    const [login, setLogin] = useState(true)

    useEffect(() => {
        setLogin(true)
    }, [])

    return (
        login ?
            <>
                <Text style={styles.title}>Public Documents</Text>
                <Pressable
                    onPress={() => navigation.navigate('Library', {
                        login
                    })}
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
                    onPress={() => navigation.navigate('Scholarship')}
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
                    onPress={() => navigation.navigate('About Us')}
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
                    onPress={() => navigation.navigate('About Us')}
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
                    onPress={() => navigation.navigate('About Us')}
                >
                    <View style={styles.containerLink}>
                        <Image
                            source={require('../assets/icons/working-time.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                        <Text style={styles.buttonLink}>Annual work programme</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => setLogin(false)}
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
                <Text style={styles.title}>Public Documents</Text>
                <Pressable
                    onPress={() => navigation.navigate('Library', {
                        login
                    })}
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
                    onPress={() => navigation.navigate('Scholarship', {
                        login
                    })}
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
                    onPress={() => navigation.navigate('About Us', {
                        login
                    })}
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
                        <Text style={styles.buttonLink}>About Us</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={() => setLogin(true)}
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
    )
}