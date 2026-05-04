import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function NotificationsScreen() {
  const navigation = useNavigation();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-[#1E293B]">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Notifications</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">ALERTS</Text>
        <View className="bg-[#1E293B] rounded-2xl p-4 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-white font-semibold text-base mb-1">Push Notifications</Text>
              <Text className="text-slate-400 text-xs">Receive alerts on your device</Text>
            </View>
            <Switch 
              value={pushEnabled} 
              onValueChange={setPushEnabled}
              trackColor={{ false: '#334155', true: '#00FF66' }}
            />
          </View>
          
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-white font-semibold text-base mb-1">Workout Reminders</Text>
              <Text className="text-slate-400 text-xs">Get reminded before scheduled sessions</Text>
            </View>
            <Switch 
              value={remindersEnabled} 
              onValueChange={setRemindersEnabled}
              trackColor={{ false: '#334155', true: '#00FF66' }}
            />
          </View>

          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-white font-semibold text-base mb-1">Email Updates</Text>
              <Text className="text-slate-400 text-xs">Weekly summaries and news</Text>
            </View>
            <Switch 
              value={emailEnabled} 
              onValueChange={setEmailEnabled}
              trackColor={{ false: '#334155', true: '#00FF66' }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
