import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import AdminTabNavigator from './AdminTabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'member' | 'trainer'>('member');

  const handleSignIn = (role: 'member' | 'trainer') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth">
            {(props) => <AuthNavigator {...props} signIn={handleSignIn} />}
          </Stack.Screen>
        ) : userRole === 'trainer' ? (
          <Stack.Screen name="AdminMain" component={AdminTabNavigator} />
        ) : (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
