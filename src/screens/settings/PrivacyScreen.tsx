import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function PrivacyScreen() {
  const navigation = useNavigation();
  const [profilePublic, setProfilePublic] = useState(false);
  const [showActivity, setShowActivity] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]" edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-[#1E293B]">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-bold">Privacy</Text>
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">PROFILE VISIBILITY</Text>
        <View className="bg-[#1E293B] rounded-2xl p-4 mb-6">
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-1 pr-4">
              <Text className="text-white font-semibold text-base mb-1">Public Profile</Text>
              <Text className="text-slate-400 text-xs">Allow other members to see your profile and stats</Text>
            </View>
            <Switch 
              value={profilePublic} 
              onValueChange={setProfilePublic}
              trackColor={{ false: '#334155', true: '#F59E0B' }}
            />
          </View>
          
          <View className="flex-row justify-between items-center">
            <View className="flex-1 pr-4">
              <Text className="text-white font-semibold text-base mb-1">Share Activity</Text>
              <Text className="text-slate-400 text-xs">Post completed workouts to the community feed</Text>
            </View>
            <Switch 
              value={showActivity} 
              onValueChange={setShowActivity}
              trackColor={{ false: '#334155', true: '#F59E0B' }}
            />
          </View>
        </View>

        <Text className="text-slate-400 text-xs font-bold tracking-widest mb-3 ml-1">DATA MANAGEMENT</Text>
        <View className="bg-[#1E293B] rounded-2xl overflow-hidden">
          <TouchableOpacity className="p-4 border-b border-[#334155] flex-row justify-between items-center">
            <Text className="text-white font-semibold">Download My Data</Text>
            <Ionicons name="download-outline" size={20} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity className="p-4 flex-row justify-between items-center">
            <Text className="text-[#EF4444] font-semibold">Delete Account</Text>
            <Ionicons name="trash-outline" size={20} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
