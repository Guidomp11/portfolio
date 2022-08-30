import { FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';

const ContactsList = ({ contacts }) => {

    const renderItem = ({item}) => {
        return (
        <TouchableOpacity 
            style={styles.contact}
            activeOpacity={1}
            onPress={() => console.log("ON CLICK")}
        >
            {/*<Image style={styles.contactImage} source={require('../assets/images/user.png')}/>*/}
            <Text style={styles.contactText}>{item.username}</Text>
        </TouchableOpacity>
    )}

    return ( 
        <FlatList 
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.name}
        />
    );
}
 
export default ContactsList;