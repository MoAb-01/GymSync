import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator({ signIn }: { signIn: () => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} signIn={signIn} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
