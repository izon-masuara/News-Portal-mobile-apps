import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    containerImages: {
        backgroundColor: '#e3f2fd',
        height: 260,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    images: {
        width: width - 10,
        height: 210,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    containerNews: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5
    },
    imageNews: {
        flex: 1,
        height: 100
    },
    textNews: {
        flex: 2,
        margin: 10,
    },
    titleNews: {
        fontSize: 20,
        fontWeight: '600',
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
        paddingTop: 10,
        marginVertical: 5
    },
    textEvent: {
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 10
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
        marginLeft: 2
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
        fontFamily: 'sans-serif'
    },
    newsImage: {
        width: width - 10,
        height: 235
    },
    openingContainer: {
        height : height,
        backgroundColor : '#b2ebf2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    openingBox : {
        height : 50,
        marginBottom : 150,
        width : width - 100,
        alignItems : 'center',
        justifyContent : 'center',
    },
})