import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AdminProfileScreen() {
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
            <Text className="text-[#00FF66] font-bold text-2xl">TA</Text>
          </View>
          <Text className="text-white text-xl font-bold mb-1">PT Coach</Text>
          <Text className="text-slate-400 text-xs mb-3">Head Trainer · GymSync Pro</Text>
          <View className="bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/20">
            <Text className="text-[#00FF66] text-xs font-bold">Active</Text>
          </View>
        </View>

        {/* Settings Menu */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-3 ml-1">SETTINGS</Text>
        <View className="space-y-3 mb-8">
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
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
