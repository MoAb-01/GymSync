import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth">
            {(props) => <AuthNavigator {...props} signIn={handleSignIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
