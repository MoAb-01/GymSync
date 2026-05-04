import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import AdminTabNavigator from './AdminTabNavigator';

import NotificationsScreen from '../screens/settings/NotificationsScreen';
import GoalsScreen from '../screens/settings/GoalsScreen';
import UnitsScreen from '../screens/settings/UnitsScreen';
import PrivacyScreen from '../screens/settings/PrivacyScreen';
import SupportScreen from '../screens/settings/SupportScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn, userRole, signIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth">
            {(props) => <AuthNavigator {...props} signIn={signIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Group>
            {userRole === 'trainer' ? (
              <Stack.Screen name="AdminMain" component={AdminTabNavigator} />
            ) : (
              <Stack.Screen name="Main" component={MainTabNavigator} />
            )}
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Goals" component={GoalsScreen} />
            <Stack.Screen name="Units" component={UnitsScreen} />
            <Stack.Screen name="Privacy" component={PrivacyScreen} />
            <Stack.Screen name="Support" component={SupportScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
