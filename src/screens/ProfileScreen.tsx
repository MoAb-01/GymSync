import { ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { signOut } = useAuth();
  const navigation = useNavigation<any>();

  const handlePress = (item: any) => {
    if (item.id === 'signout') {
      Alert.alert(
        "Sign Out",
        "Are you sure you want to sign out?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Sign Out", style: "destructive", onPress: signOut }
        ]
      );
    } else {
      const routeMap: { [key: string]: string } = {
        'notifications': 'Notifications',
        'goals': 'Goals',
        'units': 'Units',
        'privacy': 'Privacy',
        'support': 'Support',
      };
      
      const route = routeMap[item.id];
      if (route) {
        navigation.navigate(route);
      }
    }
  };

  const menuItems = [
    { id: 'notifications', title: 'Notifications', icon: 'notifications', iconColor: '#F59E0B' as const },
    { id: 'goals', title: 'Goals & Targets', icon: 'flag', iconColor: '#EC4899' as const },
    { id: 'units', title: 'Units & Preferences', icon: 'options', iconColor: '#E2E8F0' as const },
    { id: 'privacy', title: 'Privacy', icon: 'lock-closed', iconColor: '#F59E0B' as const },
    { id: 'support', title: 'Support', icon: 'chatbubble', iconColor: '#E2E8F0' as const },
    { id: 'signout', title: 'Sign Out', icon: 'log-out', iconColor: '#EF4444' as const, isDestructive: true },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>

        {/* Header Profile */}
        <View className="items-center mt-8 mb-10">
          <View className="w-20 h-20 rounded-full border-2 border-[#00FF66] items-center justify-center mb-4 bg-[#0F172A]">
            <Text className="text-[#00FF66] font-bold text-2xl">KD</Text>
          </View>
          <Text className="text-white text-xl font-bold mb-1">Kıvanç Demir</Text>
          <Text className="text-slate-400 text-xs mb-3">Premium Member · Since Jan 2025</Text>
          <View className="bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/20">
            <Text className="text-[#00FF66] text-xs font-bold">Active</Text>
          </View>
        </View>

        {/* My Stats */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">MY STATS</Text>
        <View className="flex-row justify-between mb-8">
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 mr-2">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-1">WORKOUTS</Text>
            <Text className="text-[#00FF66] font-bold text-2xl">47</Text>
            <Text className="text-slate-500 text-[10px] mt-1">This year</Text>
          </View>

          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 mx-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-1">STREAK</Text>
            <Text className="text-[#F59E0B] font-bold text-2xl">12d</Text>
            <Text className="text-slate-500 text-[10px] mt-1">Personal best</Text>
          </View>

          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1 ml-2">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-1">WEIGHT</Text>
            <Text className="text-[#00FF66] font-bold text-2xl">-3kg</Text>
            <Text className="text-slate-500 text-[10px] mt-1">Lost total</Text>
          </View>
        </View>

        {/* Settings Menu */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">SETTINGS</Text>
        <View className="space-y-3 mb-8">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(item)}
              className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center justify-between mb-3"
            >
              <View className="flex-row items-center">
                <Ionicons name={item.icon as any} size={20} color={item.iconColor} />
                <Text className={`font-semibold ml-3 ${item.isDestructive ? 'text-[#EF4444]' : 'text-white'}`}>
                  {item.title}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#64748B" />
            </TouchableOpacity>
          ))}
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}
