import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contact: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 5,
    },
    contactImage: {
        width: 64,
        height: 64,
        borderRadius: 100,
    },
    contactText: {
        flex: 1,
        alignSelf: 'center',
        padding: 5,
        fontSize: 20,
    },
    contactSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});