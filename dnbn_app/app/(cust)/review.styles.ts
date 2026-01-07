import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    backButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    placeholder: {
        width: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    topnav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    topnavText: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
    },
    topNavTab: {
        paddingBottom: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
        height: '100%',
    },
});