import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerImages: {
        backgroundColor: '#e3f2fd',
        height: 220,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    images: {
        width: '90%',
        height: 180,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
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
        height: 250,
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
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    newsScreenImg: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        marginVertical: 5
    },
    newsTitle : {
        paddingVertical : 15,
        fontSize : 20,
        fontWeight : '700',
        fontFamily : 'sans-serif'
    },
    newsImage : {
        width : '98%',
        height : 220
    }
})