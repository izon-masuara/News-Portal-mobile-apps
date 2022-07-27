import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    containerImages: {
        height: 260,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom : 10
    },
    images: {
        width: width,
        height: 235,
        alignItems: 'center',
    },
    imageHome: {
        margin : 20,
        borderWidth : 1,
        borderRadius : 10
    },
    eventImg: {
        width: '100%',
        height: 210,
        alignItems: 'center',
        borderRadius: 10
    },
    containerNews: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical : 5,
        marginHorizontal : 3,
        borderRadius : 10,
        shadowColor : 'black',
        elevation : 10,
    },
    imageNews: {
        flex: 1,
        height: 100,
        borderRadius : 10
    },
    textNews: {
        flex: 2,
        margin: 10,
    },
    titleNews: {
        fontSize: 20,
        fontWeight: '600',
        color : '#424242'
    },
    textDate: {
        fontWeight: 'bold',
        fontSize: 10,
    },
    containerEvents: {
        backgroundColor: 'white',
        height: height - 400,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
        elevation : 5,
        borderRadius : 10,
        margin : 10
    },
    textEvent: {
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10,
        color : '#424242'
    },
    buttonLink: {
        fontWeight: '600',
        fontSize: 18,
        marginLeft: 15,
        paddingBottom: 8
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        paddingBottom: 10,
        marginLeft: 2,
    },
    containerLink: {
        flexDirection: 'row',
        margin: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    newsScreenImg: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 5
    },
    newsTitle: {
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'sans-serif',
        color : "#424242"
    },
    newsImage: {
        width: width - 10,
        height: 235,
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 5,
    },
    openingContainer: {
        height: height,
        backgroundColor: '#b2ebf2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    openingBox: {
        height: 50,
        marginBottom: 150,
        width: width - 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
})