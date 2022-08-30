import { View, StyleSheet } from 'react-native';
import ContactsList from "../components/ContactList";

const Contacts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contacts}>
                <ContactsList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    contacts: {
        flex: 12,
        padding: 5,
        width: '100%'
    }
});

export default Contacts;