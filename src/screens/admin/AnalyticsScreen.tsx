import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AnalyticsScreen() {
  const activities = [
    {
      id: 1,
      title: 'New payment received',
      subtitle: 'Burak Şahin · ₺450 Premium',
      time: '2m ago',
      icon: 'card',
      iconColor: '#3B82F6',
      iconBg: 'bg-[#3B82F6]/20'
    },
    {
      id: 2,
      title: 'Workout request',
      subtitle: 'Kıvanç Demir requested a program',
      time: '15m ago',
      icon: 'clipboard',
      iconColor: '#F59E0B',
      iconBg: 'bg-[#F59E0B]/20'
    },
    {
      id: 3,
      title: 'Announcement sent',
      subtitle: 'Special offer · 127 members',
      time: '1h ago',
      icon: 'megaphone',
      iconColor: '#F59E0B',
      iconBg: 'bg-[#F59E0B]/20'
    },
    {
      id: 4,
      title: 'Membership expiring',
      subtitle: 'Mert Kaya · 3 days left',
      time: '2h ago',
      icon: 'warning',
      iconColor: '#EF4444',
      iconBg: 'bg-[#EF4444]/20'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5 pt-6" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-3xl font-bold">Analytics</Text>
          <Text className="text-slate-400 mt-1">March 2026 Overview</Text>
        </View>

        {/* 2x2 Grid */}
        <View className="flex-row gap-4 mb-4">
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">REVENUE</Text>
            <Text className="text-[#00FF66] font-bold text-2xl">₺24.8K</Text>
            <Text className="text-slate-500 text-[10px] mt-1">+12% vs last month</Text>
          </View>
          
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">ACTIVE MEMBERS</Text>
            <Text className="text-[#3B82F6] font-bold text-2xl">127</Text>
            <Text className="text-slate-500 text-[10px] mt-1">8 new this month</Text>
          </View>
        </View>

        <View className="flex-row gap-4 mb-6">
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">CHURN RATE</Text>
            <Text className="text-[#00FF66] font-bold text-2xl">4.2%</Text>
            <Text className="text-slate-500 text-[10px] mt-1">↓ from 6.1%</Text>
          </View>
          
          <View className="bg-[#1E293B] rounded-2xl p-4 flex-1">
            <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-2">EXPIRED</Text>
            <Text className="text-[#EF4444] font-bold text-2xl">18</Text>
            <Text className="text-slate-500 text-[10px] mt-1">Members to follow up</Text>
          </View>
        </View>

        {/* Monthly Revenue Card */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-8">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-white font-bold text-lg">Monthly Revenue</Text>
              <Text className="text-slate-400 text-xs">Last 10 months</Text>
            </View>
            <Text className="text-[#00FF66] font-bold text-xl">₺16.8K</Text>
          </View>
          
          {/* Mock Graph using flex bars */}
          <View className="h-24 flex-row items-end justify-between pt-4">
            {[40, 30, 50, 45, 60, 55, 75, 70, 90, 85].map((height, i) => (
              <View 
                key={i} 
                className="w-1/12 bg-[#00FF66] rounded-t-sm opacity-80" 
                style={{ height: `${height}%` }} 
              />
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <Text className="text-slate-400 text-[10px] font-bold tracking-widest mb-4 ml-1">RECENT ACTIVITY</Text>
        <View className="space-y-3 mb-8">
          {activities.map((activity) => (
            <View key={activity.id} className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center mb-3">
              <View className={`${activity.iconBg} w-10 h-10 rounded-xl items-center justify-center mr-4`}>
                <Ionicons name={activity.icon as any} size={20} color={activity.iconColor} />
              </View>
              
              <View className="flex-1">
                <Text className="text-white font-bold text-sm mb-1">{activity.title}</Text>
                <Text className="text-slate-400 text-xs">{activity.subtitle}</Text>
              </View>
              
              <Text className="text-slate-500 text-[10px]">{activity.time}</Text>
            </View>
          ))}
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}
