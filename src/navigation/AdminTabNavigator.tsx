import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import AnalyticsScreen from '../screens/admin/AnalyticsScreen';
import MembersScreen from '../screens/admin/MembersScreen';
import MemberDetailScreen from '../screens/admin/MemberDetailScreen';
import AnnounceScreen from '../screens/admin/AnnounceScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';

const Tab = createBottomTabNavigator();
const MembersStack = createNativeStackNavigator();

function MembersStackScreen() {
  return (
    <MembersStack.Navigator screenOptions={{ headerShown: false }}>
      <MembersStack.Screen name="MembersList" component={MembersScreen} />
      <MembersStack.Screen name="MemberDetail" component={MemberDetailScreen} />
    </MembersStack.Navigator>
  );
}

export default function AdminTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0F172A',
          borderTopColor: '#1E293B',
        },
        tabBarActiveTintColor: '#00FF66', // Tailwind neon green for admin
        tabBarInactiveTintColor: '#94A3B8', // Tailwind slate 400
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Analytics') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Members') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Announce') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help'; // default
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Members" component={MembersStackScreen} />
      <Tab.Screen name="Announce" component={AnnounceScreen} />
      <Tab.Screen name="Profile" component={AdminProfileScreen} />
    </Tab.Navigator>
  );
}
