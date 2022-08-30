import { createStackNavigator } from '@react-navigation/stack';
import { Chat, Contacts } from "../screens";
import { IO } from "../backend/socket.config";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}